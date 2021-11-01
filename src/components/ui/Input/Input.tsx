import React, { ForwardedRef } from 'react';
import { TextField, TextFieldProps } from '@material-ui/core';
import * as S from './styles';

const Input = React.forwardRef(
  (props: TextFieldProps, ref: ForwardedRef<HTMLDivElement>) => (
    <S.StyledInput>
      <TextField ref={ref} {...props} />
      {props.children && props.children}
    </S.StyledInput>
  )
);

Input.displayName = 'Input';

export default Input;
