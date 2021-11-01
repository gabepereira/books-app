import { AxiosResponse, AxiosError } from 'axios';
import { BooksParams, BooksResponse } from 'models/Book';
import api from '../api';

const BooksService = {
  getBooks: (
    params: BooksParams & { [key: string]: string } = {},
    authorization: string
  ): Promise<AxiosResponse<BooksResponse>> =>
    new Promise((resolve, reject) => {
      const query = Object.keys(params)
        .map((key) => `${key}=${params[key]}`)
        .join('&');

      api
        .get(`/books?${query}`, {
          headers: {
            authorization: `Bearer ${authorization}`,
          },
        })
        .then((res) => resolve(res))
        .catch((error: AxiosError) => reject(error));
    }),
};

export default BooksService;
