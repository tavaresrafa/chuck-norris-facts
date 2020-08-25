import styled, { keyframes } from 'styled-components';

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
`;

// Logo Animation
const shakeAnimation = keyframes`
  0% { transform: rotate(0deg); }
  10% { transform: rotate(1deg); }
  20% { transform: rotate(0deg); }
  30% { transform: rotate(-1deg); }
  40% { transform: rotate(0deg); }
  50% { transform: rotate(1deg); }
  60% { transform: rotate(0deg); }
  70% { transform: rotate(-1deg); }
  80% { transform: rotate(0deg); }
  90% { transform: rotate(1deg); }
  100% { transform: rotate(0deg); }
`;

export const Logo = styled.picture`
  max-width: 100%;

  @media (min-width: 360px) {
    max-width: 36rem;
  }

  :hover {
    animation-name: ${shakeAnimation};
    animation-duration: 0.4s;
  }
`;
