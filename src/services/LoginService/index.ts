import { AxiosResponse, AxiosError } from 'axios';
import { AuthBody, AuthResponse } from 'models/Auth';
import api from '../api';

const LoginService = {
  login: (body: AuthBody): Promise<AxiosResponse<AuthResponse>> =>
    new Promise((resolve, reject) => {
      const { email, password } = body;

      api
        .post('/auth/sign-in', {
          email,
          password,
        })
        .then((res) => resolve(res))
        .catch((error: AxiosError) => reject(error));
    }),
};

export default LoginService;
