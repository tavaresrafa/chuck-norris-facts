import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  width: 120rem;
  background-color: ${colors.white};
  height: 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    padding-top: 3rem;
  }
`;

export const WrapperButtons = styled.div`
  display: flex;
  margin-bottom: 4rem;
  width: 100%;

  @media (min-width: 576px) {
    justify-content: center;

    :last-child {
      margin-top: 4rem;
    }
  }
`;

export const ContainerCard = styled.section`
  width: 100%;
`;
