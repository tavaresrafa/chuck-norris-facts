import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const ErrorMessage = styled.div`
  background: ${colors.orange};
  color: ${colors.white};
  margin: 0 auto;
  width: 20rem;
  font-size: 1.6rem;
  padding: 15px;
  box-shadow: 0 0 3px 1px rgba(0,0,0,0.2);
  border-radius: 5px;
`;
