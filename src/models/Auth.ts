export interface AuthBody {
  email: string;
  password: string;
}

export interface AuthResponse {
  data: {
    birthdate: string;
    email: string;
    gender: 'M' | 'F';
    id: string;
    name: string;
  };
}

export interface AuthCredentials {
  authorization: string;
  refreshToken: string;
}
