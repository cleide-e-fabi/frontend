import styled from 'styled-components';
import theme from '../styles/theme';

export const Title = styled.h1`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 8px;
  font-family: 'Montserrat', sans-serif;
  font-size: 25px;
  font-weight: 700;
  color: ${theme.colors.secondary};
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0px 40px;
  margin-bottom: 30px;

  :nth-child(1) {
    margin-bottom: 2px;
  }

  .line {
    width: 122px;
    height: 5px;
    background-color: ${theme.colors.secondary};
    margin-bottom: 14px;
  }
`;
