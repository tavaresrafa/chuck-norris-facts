import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
`;

export const Input = styled.input`
  background: ${colors.white};
  border: 1px solid ${colors.gray2};
  font-size: 1.3rem;
  padding: 1.2rem;
  width: 100%;
  height: 4rem;
  text-align: center;

  @media (min-width: 576px) {
    width: 46rem;
    text-align: left;
  }
`;
