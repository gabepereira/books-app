import { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container } from '@material-ui/core';
import BooksService from 'services/BooksService';
import { AuthContext } from 'contexts/AuthContext';
import Header from 'components/ui/Header';
import Outlet from 'components/home/Outlet';
import * as S from './styles';
import { Book } from 'models/Book';

const initialParams = {
  page: '1',
  amount: '20',
};

const HomeLayout = () => {
  const { replace } = useRouter();
  const {
    state: {
      credentials: { authorization },
    },
    setState,
  } = useContext(AuthContext);
  const [params] = useState(initialParams);
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const initialize = () => {
      if (!authorization) {
        setState({
          credentials: {
            authorization: '',
            refreshToken: '',
          },
          user: null,
        });

        replace('/');
        return;
      }

      fetchBooks();
    };

    const fetchBooks = async () => {
      try {
        const res = await BooksService.getBooks(params, authorization);

        const {
          data: { data },
        } = res;

        setBooks(data);
      } catch (error) {
        console.error(error);
      }
    };

    initialize();
  }, [params, authorization, replace, setState]);

  return (
    <S.Background>
      <Container>
        <Header />

        <Outlet books={books} />
      </Container>
    </S.Background>
  );
};

export default HomeLayout;
