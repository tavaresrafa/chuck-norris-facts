import React from 'react';
import * as S from './styles';
import Image from '../../assets/img/chucknorris_logo.png';

const Header = () => (
  <S.Container>
    <S.Logo>
      <source
        media="(min-width: 800px)"
        srcSet={`${Image} 1x, ${Image} 2x`}
      />
      <source
        media="(min-width: 400px)"
        srcSet={`${Image} 1x, ${Image} 2x`}
      />
      <source srcSet={`${Image} 1x, ${Image} 2x`} />
      <img src={Image} alt="Logo do site." />
    </S.Logo>
  </S.Container>
)

export default Header;