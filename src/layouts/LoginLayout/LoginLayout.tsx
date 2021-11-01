/* eslint-disable @next/next/no-img-element */
import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { Container, Typography } from '@material-ui/core';
import LoginService from 'services/LoginService';
import { AuthContext } from 'contexts/AuthContext';
import Input from 'components/ui/Input';
import * as S from './styles';
import { AuthBody } from 'models/Auth';

const LoginLayout = () => {
  const { setState } = useContext(AuthContext);
  const { replace } = useRouter();
  const { register, handleSubmit } = useForm();

  const submit = async (values: AuthBody) => {
    try {
      const res = await LoginService.login(values);

      const {
        data,
        headers: { authorization, 'refresh-token': refreshToken },
      } = res;

      setState({ user: data, credentials: { authorization, refreshToken } });

      replace('/home');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.Background data-testid="LoginLayout">
      <Container>
        <S.FormWrapper>
          <S.FormHeader>
            <img src="/images/logo.svg" alt="Logo" />
            <Typography variant="h3">Books</Typography>
          </S.FormHeader>

          <S.Form onSubmit={handleSubmit(submit)}>
            <Input
              {...register('email', {
                required: true,
              })}
              label="Email"
              variant="filled"
              type="email"
              fullWidth
              style={{ marginBottom: 16 }}
            />
            <Input
              {...register('password', {
                required: true,
              })}
              label="Senha"
              variant="filled"
              type="password"
              fullWidth
            >
              <S.SubmitButton type="submit">Entrar</S.SubmitButton>
            </Input>
          </S.Form>
        </S.FormWrapper>
      </Container>
    </S.Background>
  );
};

export default LoginLayout;
