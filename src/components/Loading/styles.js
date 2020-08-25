import styled, { keyframes } from 'styled-components';
import { colors } from '../../styles/colors';

const bounceAnimation = keyframes`
  0%, 80%, 100% {transform: scale(0);}
  40% {transform: scale(1.0);}
`;

export const Loading = styled.div`
  margin: 100px auto 0;
  width: 70px;
  text-align: center;

  > div {
    width: 18px;
    height: 18px;
    background-color: ${colors.orange};
    border-radius: 100%;
    display: inline-block;
    animation: ${bounceAnimation} 1.4s infinite ease-in-out both;
  }

  .bounce1 {
    animation-delay: -0.32s;
  }

  .bounce2 {
    animation-delay: -0.16s;
  }
`;
