import React from 'react';
import * as S from './styles';

const ErrorMessage = ({ text }) => (
  <S.ErrorMessage>
    <p data-testid="errormessage">{text}</p>
  </S.ErrorMessage>
)

export default ErrorMessage;
