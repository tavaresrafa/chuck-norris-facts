import React from 'react';
import * as S from './styles';

const Button = ({ text, handleClick }) => (
  <S.Container>
    <S.Button data-testid="button" onClick={handleClick}>{text}</S.Button>
  </S.Container>
)

export default Button;
