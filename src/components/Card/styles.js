import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Card = styled.blockquote`
  text-align: justify;
  background: ${colors.gray1};
  border-left: 1rem solid ${colors.orange};
  padding: 0.5em 1rem;
  font-size: 1.6rem;
  margin-bottom: 1.6rem;
  display: flex;
  align-items: center;
  align-self: flex-start;
  transition: 0.2s ease;
  max-width: 100%;
  box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.2);

  :hover {
    color: ${colors.orange};
  }

  p {
    word-wrap: anywhere;
    width: 100%;
  }
`;
