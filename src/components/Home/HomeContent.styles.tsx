import styled from 'styled-components';
import theme from '../../styles/theme';

export const HomeContent = styled.header`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${theme.colors.secondary};
  font-family: 'Montserrat', sans-serif;
  box-sizing: border-box;
  padding-top: 60px;

  p {
    width: 88%;
    font-weight: 700;
    font-size: 64px;
    line-height: 70px;
  }

  sub {
    width: 88%;
    font-size: 22px;
    font-weight: 500;
    margin-top: 14px;
    line-height: 30px;
  }

  span {
    width: 88%;
    margin-top: 40px;
    transition: 400ms;
    .conferir-products {
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.primary};
      font-weight: 900;
      letter-spacing: 1px;
      border-radius: 0px;
      box-sizing: border-box;
      padding: 10px 22px;
      font-size: 22px;
    }

    &:hover {
      scale: 1.02;
    }
  }

  @media (max-width: 1580px) {
    padding-top: 100px;
    p {
      font-size: 46px;
      line-height: 52px;
    }

    sub {
      margin-top: 10px;
      font-size: 15.5px;
      line-height: 20px;
    }

    span {
      .conferir-products {
        font-size: 18px;
        padding: 10px 22px;
      }
    }
  }

  @media (max-width: 1120px) {
    width: 100%;
    padding-top: 0px;
    p {
      font-size: 48px;
      line-height: 52px;
    }

    sub {
      margin-top: 10px;
      font-size: 20px;
      line-height: 22px;
    }

    span {
      .conferir-products {
        font-size: 16px;
        padding: 9px 20px;
      }
    }
  }

  @media (max-width: 920px) {
    p {
      font-size: 40px;
      line-height: 42px;
    }

    sub {
      margin-top: 10px;
      font-size: 14px;
      line-height: 18px;
    }

    span {
      .conferir-products {
        font-size: 16px;
        padding: 9px 20px;
      }
    }
  }

  @media (max-width: 560px) {
    p {
      font-size: 36px;
      line-height: 38px;
    }

    sub {
      margin-top: 10px;
      font-size: 13px;
      line-height: 18px;
    }

    span {
      .conferir-products {
        font-size: 14px;
        padding: 8px 18px;
      }
    }
  }

  @media (max-width: 460px) {
    p {
      font-size: 34px;
      line-height: 38px;
      text-align: center;
    }

    sub {
      margin-top: 10px;
      font-size: 13px;
      line-height: 18px;
      text-align: center;
    }

    span {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .conferir-products {
        font-size: 14px;
        padding: 8px 18px;
      }
    }
  }
`;
