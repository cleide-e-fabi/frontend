import styled from 'styled-components';
import theme from '../../styles/theme';

export const MainFooter = styled.footer`
  width: 100%;
  height: max-content;
  background-color: ${theme.colors.gray};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding-bottom: 140px;
  position: relative;

  .footer-logo {
    width: 112px;
    margin-bottom: 80px;
  }
  .footer-info {
    font-family: 'Montserrat', sans-serif;
    font-size: 17px;
    font-weight: 400;
    line-height: 20.72px;
    color: ${theme.colors.secondary};
  }

  .footer-wpp,
  .footer-wppline,
  .footer-instagram {
    position: absolute;
    bottom: 50px;
    transition: 400ms;
    &:hover {
      scale: 1.2;
      cursor: pointer;
    }
  }

  .footer-wpp {
    width: 60px;
    right: 50px;
    position: fixed;
  }

  .footer-wppline {
    width: 32px;
    left: 50px;
  }

  .footer-instagram {
    width: 32px;
    left: 120px;
  }
  @media (max-width: 1580px) {
    padding-bottom: 110px;

    .footer-logo {
      width: 100px;
      margin-bottom: 56px;
    }
    .footer-info {
      font-size: 15px;
      line-height: 18px;
    }

    .footer-wpp,
    .footer-wppline,
    .footer-instagram {
      bottom: 35px;
    }

    .footer-wpp {
      width: 66px;
      right: 40px;
    }

    .footer-wppline {
      width: 30px;
      left: 40px;
    }

    .footer-instagram {
      width: 30px;
      left: 110px;
    }
  }

  @media (max-width: 1580px) {
    padding-bottom: 80px;
  }

  @media (max-width: 780px) {
    .footer-logo {
      margin-bottom: 46px;
    }
    .footer-info {
      font-size: 12px;
      line-height: 15px;
    }

    .footer-wpp,
    .footer-wppline,
    .footer-instagram {
      bottom: 35px;
    }

    .footer-wpp {
      width: 50px;
      right: 34px;
    }

    .footer-wppline {
      width: 26px;
      left: 30px;
    }

    .footer-instagram {
      width: 26px;
      left: 80px;
    }
  }
`;
