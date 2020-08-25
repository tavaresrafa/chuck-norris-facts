import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  width: 100%;

  :not(:last-child) {
    margin-right: 0.5rem;
  }

  @media (min-width: 576px) {
    width: auto;
  }
`;

export const Button = styled.button`
  background: ${colors.gray2};
  color: ${colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.gray2};
  font-size: 1.3rem;
  padding: 1.2rem;
  width: 100%;
  height: 4rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    color: ${colors.white};
    background: ${colors.orange};
    border: 1px solid ${colors.orange};
  }
`;
