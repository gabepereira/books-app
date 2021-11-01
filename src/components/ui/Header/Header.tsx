/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { Typography } from '@material-ui/core';
import { Hidden } from 'react-grid-system';
import { AuthContext } from 'contexts/AuthContext';
import * as S from './styles';

const Header = () => {
  const { replace } = useRouter();

  const {
    state: { user },
    setState,
  } = useContext(AuthContext);

  const handleLogout = () => {
    setState({
      credentials: {
        authorization: '',
        refreshToken: '',
      },
      user: null,
    });

    replace('/');
  };

  return (
    <S.HeaderWrapper>
      <S.LogoWrapper>
        <img src="/images/logo-black.svg" alt="Logo" />
        <Typography variant="h3">Books</Typography>
      </S.LogoWrapper>

      <S.Greetings>
        <Hidden xs>
          Bem vindo, <span style={{ fontWeight: 500 }}>{user?.name}!</span>
        </Hidden>
        <img onClick={handleLogout} src="/images/logout.svg" alt="Logo" />
      </S.Greetings>
    </S.HeaderWrapper>
  );
};

export default Header;
