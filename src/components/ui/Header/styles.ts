import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 40px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 40px;
  margin-bottom: 40px;
`;

export const LogoWrapper = styled.div`
  display: flex;

  h3 {
    margin-left: 16px;
    font-family: 'Heebo';
    font-weight: 200;
  }
`;

export const Greetings = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 200;
  font-family: 'Heebo';

  img {
    cursor: pointer;
    margin-left: 16px;
  }
`;
