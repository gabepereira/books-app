import styled from 'styled-components';

export const StyledInput = styled.div`
  position: relative;

  .MuiFormLabel-root,
  .MuiInputBase-root {
    color: white !important;
  }

  .MuiFilledInput-underline::before,
  .MuiFilledInput-underline::after {
    content: none;
  }
`;
