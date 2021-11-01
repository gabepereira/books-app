import BookCard from 'components/home/BookCard';
import * as S from './styles';
import { Book } from 'models/Book';

interface Props {
  books: Book[];
}

const Outlet = ({ books }: Props) => {
  return (
    <S.OutletWrapper>
      {books.map((book) => (
        <BookCard key={book.id} data={book} />
      ))}
    </S.OutletWrapper>
  );
};

export default Outlet;
