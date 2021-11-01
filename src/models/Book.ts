export interface Book {
  authors: string[];
  category: string;
  description: string;
  id: string;
  imageUrl: string;
  isbn10: string;
  isbn13: string;
  language: string;
  pageCount: number;
  published: number;
  publisher: string;
  title: string;
}

export interface BooksParams {
  page?: string;
  amount?: string;
  category?: string;
}

export interface BooksResponse {
  data: Book[];
}
