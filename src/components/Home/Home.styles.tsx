import styled from 'styled-components';
import theme from '../../styles/theme';

export const StyledHome = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: ${theme.colors.primary};

  .middle-content {
    width: 100%;
    height: 93%;
    display: flex;
  }

  .header-logo {
    width: 82px;
    position: absolute;
    z-index: 999;
    top: 40px;
    left: 50px;
  }

  @media (max-width: 1580px) {
    .header-logo {
      width: 70px;
      top: 18px;
      left: 40px;
    }
  }
  @media (max-width: 1120px) {
    .header-logo {
      display: none;
    }
  }
`;
