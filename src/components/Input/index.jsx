import React from 'react';
import * as S from './styles';

const Input = ({ placeholder, handleOnKeyDown, handleOnChange }) => (
  <S.Container>
    <S.Input
      defaultValue=""
      placeholder={placeholder}
      onKeyDown={handleOnKeyDown}
      onChange={handleOnChange}
    />
  </S.Container>
)

export default Input;
