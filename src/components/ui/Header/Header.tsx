/* eslint-disable @next/next/no-img-element */
import { Container, Typography } from '@material-ui/core';
import * as S from './styles';

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.LogoWrapper>
        <img src="/images/logo-black.svg" alt="Logo" />
        <Typography variant="h3">Books</Typography>
      </S.LogoWrapper>
    </S.HeaderWrapper>
  );
};

export default Header;
