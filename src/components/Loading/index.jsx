import React from 'react';
import * as S from './styles';

const Loading = () => (
  <S.Loading>
    <div data-testid="bounce1" className="bounce1"></div>
    <div data-testid="bounce2" className="bounce2"></div>
    <div data-testid="bounce3" className="bounce3"></div>
  </S.Loading>
)

export default Loading;
