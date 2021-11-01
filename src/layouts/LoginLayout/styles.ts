import styled from 'styled-components';

export const Background = styled.section`
  width: 100%;
  height: 100vh;
  background: url('/images/bg-login.png') center;
  background-size: cover;
`;

export const FormWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 368px;
  min-width: 288px;
  color: white;
`;

export const FormHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 48px;

  h3 {
    margin-left: 16px;
    font-family: 'Heebo';
    font-weight: 200;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const SubmitButton = styled.button`
  cursor: pointer;
  width: 85px;
  height: 36px;
  position: absolute;
  right: 12px;
  bottom: 0;
  top: 0;
  margin: auto;
  background: #ffffff;
  border-radius: 44px;
  border: none;
  font-family: 'Heebo';
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #b22e6f;
`;
