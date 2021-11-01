import * as S from './styles';
import { Book } from 'models/Book';

interface Props {
  data: Book;
}

const BookCard: React.FC<Props> = ({
  data: { id, title, authors, imageUrl, pageCount, publisher, published },
}) => {
  return (
    <S.CardWrapper>
      <S.Cover src={imageUrl} alt={id} />

      <S.Information>
        <S.Title>{title}</S.Title>
        <S.Authors>{authors.join(', ')}</S.Authors>
        <S.Description>
          {`${pageCount} páginas`}
          <br />
          {`Editora ${publisher}`}
          <br />
          {`Publicado em ${published}`}
        </S.Description>
      </S.Information>
    </S.CardWrapper>
  );
};

export default BookCard;
