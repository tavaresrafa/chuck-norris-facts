import React from 'react';
import * as S from './styles';

const Card = ({ text }) => (
  <S.Card>
    <p data-testid="card">{text}</p>
  </S.Card>
)

export default Card;
