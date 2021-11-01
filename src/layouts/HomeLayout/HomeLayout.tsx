import { useContext, useState, useEffect } from 'react';
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
  const {
    state: {
      user,
      credentials: { authorization },
    },
  } = useContext(AuthContext);
  const [params, setParams] = useState(initialParams);
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const initialize = () => {
      if (!authorization) {
        console.log('no credentials found');
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
  }, [params, authorization]);

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
