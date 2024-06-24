import styled from 'styled-components';
import theme from '../../styles/theme';

export const Footer = styled.div`
  width: 100%;
  height: 7%;
  background: linear-gradient(
    to right,
    ${theme.colors.secondary} 50%,
    ${theme.colors.primary} 0%
  );
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
