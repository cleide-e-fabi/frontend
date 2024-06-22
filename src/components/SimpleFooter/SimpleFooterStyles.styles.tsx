import styled from 'styled-components';
import theme from '../../styles/theme';

export const SimpleFooterStyles = styled.header`
  width: 100%;
  height: 230px;
  margin-top: 120px;
  background-color: ${theme.colors.secondary};
  clip-path: polygon(0 0, 100% 18%, 100% 100%, 0% 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 20px 120px;

  .simple-footer-logo {
    width: 100px;
  }
`;
