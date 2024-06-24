import styled from 'styled-components';
import theme from '../../styles/theme';

export const AboutContainer = styled.div`
  width: 100vw;
  height: max-content;
  background-color: ${theme.colors.gray};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-top: 170px;

  .about-content {
    width: 100%;
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;
    padding-top: 10px;
    padding-bottom: 80px;

    .div-container {
      width: 480px;
      border-radius: 80px;
      background-color: #f2f2f2;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
    }

    .about-text {
      width: 45%;
      height: max-content;
      font-family: 'Montserrat', sans-serif;
      font-size: 22px;
      font-weight: 500;
      line-height: 31.69px;
      color: ${theme.colors.secondary};
    }
  }

  .about-footer {
    width: 100%;
    height: 460px;
    background-color: ${theme.colors.secondary};
    clip-path: polygon(0 0, 100% 39%, 100% 100%, 0% 100%);
    position: relative;
    box-sizing: border-box;
    padding-top: 80px;
    padding-left: 80px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .about-footer-wpp {
      width: 80px;
      right: 50px;
      bottom: 50px;
      position: absolute;
    }

    .about-footer-info {
      width: 20%;
      height: 120px;
      font-family: 'Montserrat', sans-serif;
      font-size: 20px;
      margin-left: 150px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h1 {
        font-weight: 900;
        margin-bottom: 8px;
      }

      h2 {
        font-weight: 600;
      }
    }
  }
  .about-simple-footer {
    width: 100%;
    display: none;
  }

  @media (max-width: 1500px) {
    padding-top: 130px;

    .about-content {
      padding-top: 0px;

      .div-container {
        width: 450px;
        border-radius: 76px;
      }

      .about-text {
        font-size: 18px;
        line-height: 28.69px;
      }
    }

    .about-footer {
      height: 340px;
      clip-path: polygon(0 0, 100% 19%, 100% 100%, 0% 100%);
      padding-top: 20px;

      .about-footer-wpp {
        width: 80px;
        right: 50px;
        bottom: 50px;
        position: absolute;
      }

      .about-footer-info {
        font-size: 16px;
        margin-left: 130px;

        h1 {
          margin-bottom: 0px;
        }
      }
    }
  }

  @media (max-width: 900px) {
    padding-top: 80px;

    .about-content {
      .div-container {
        width: 350px;
        border-radius: 72px;
      }

      .about-text {
        font-size: 12px;
        line-height: 26.69px;
      }
    }

    .about-footer {
      height: 280px;
      clip-path: polygon(0 0, 100% 14%, 100% 100%, 0% 100%);

      .about-footer-wpp {
        bottom: 20px;
        width: 55px;
      }

      .about-footer-info {
        width: 40%;
        height: max-content;
        font-size: 13px;
        margin-left: 0px;

        h1 {
          margin-bottom: 12px;
        }
        h2 {
          margin-bottom: 8px;
          line-height: 16px;
        }
      }
    }
  }

  @media (max-width: 700px) {
    padding-top: 50px;

    .about-content {
      .div-container {
        width: 280px;
        border-radius: 60px;
      }

      .about-text {
        font-size: 10px;
        line-height: 16.69px;
      }
    }

    .about-footer {
      height: 220px;

      .about-footer-wpp {
        bottom: 16px;
        width: 45px;
      }

      .about-footer-info {
        font-size: 11px;
      }
    }
  }

  @media (max-width: 600px) {
    .about-content {
      flex-direction: column;
      .div-container {
        width: 80%;
        border-radius: 60px;
        margin-bottom: 30px;
      }

      .about-text {
        width: 80%;
        font-size: 14px;
        line-height: 24.69px;
        text-align: justify;
      }
    }

    .about-footer {
      display: none;
    }

    .about-simple-footer {
      display: flex;
    }
  }
`;
