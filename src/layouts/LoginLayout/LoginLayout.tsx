/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, Typography } from '@material-ui/core';
import Input from 'components/ui/Input';
import * as S from './styles';

const LoginLayout = () => {
  const { register, handleSubmit } = useForm();

  const submit = async (data: {}) => {
    console.log(data);
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
