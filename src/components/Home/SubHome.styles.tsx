import styled, { keyframes } from 'styled-components';
import theme from '../../styles/theme';
import banner from '../../assets/imgs/banner.png';
import banner2 from '../../assets/imgs/banner2.png';

const changeBackground = keyframes`
  0% {
    background-image: url(${banner});
  }
  50% {
    background-image: url(${banner2});
  }
`;

export const SubHome = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  min-height: max-content;
  box-sizing: border-box;
  padding: 45px 30px;
  background-color: ${theme.colors.gray};

  .banner {
    width: 100%;
    height: 600px;
    border-radius: 60px;
    position: relative;
    background-image: url(${banner});
    animation: ${changeBackground} 9s infinite;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    .cep-container {
      width: 100%;
      position: absolute;
      bottom: -180px;
      display: flex;
      justify-content: center;

      .cep-content {
        width: 46%;
        height: 220px;
        border-radius: 20px;
        background-color: #f7f7f7;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0px 64px;

        .cep-img {
          height: 72%;
        }

        .cep-search {
          width: 70%;
          height: 72%;
          display: flex;
          flex-direction: column;
          justify-content: center;

          .cep-title {
            font-family: 'Montserrat', sans-serif;
            color: #626262;
            font-size: 30px;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .cep-form {
            display: flex;
            justify-content: space-between;
            height: 44px;
            margin-bottom: 14px;

            input,
            button {
              background-color: ${theme.colors.secondary};
              border: none;
              border-radius: 10px;
              color: #fff;
              box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
              font-size: 14px;
              font-family: 'Montserrat', sans-serif;
            }
            input {
              width: 72%;
              box-sizing: border-box;
              padding: 10px 20px;
              outline: none;
              &::-webkit-inner-spin-button {
                -webkit-appearance: none;
              }
              &::-webkit-input-placeholder {
                color: #fff;
                font-weight: 500;
              }
            }
            button {
              width: 24%;
              font-weight: 700;
              display: flex;
              align-items: center;
              justify-content: center;

              .loading-gif {
                height: 90%;
              }
            }
          }

          .cep-link {
            font-family: 'Montserrat', sans-serif;
            font-size: 11px;
            color: #626262;
            text-decoration: underline;
          }

          .invalide-cep {
            font-size: 12px;
            font-weight: 600;
            color: #ff0000;
            margin-bottom: 12px;
            margin-top: 10px;
          }

          .free-ship-container {
            width: max-content;
            height: max-content;
            display: flex;
            font-size: 14px;
            color: ${theme.colors.secondary};
            margin-top: 12px;

            .free-ship-text,
            .free-ship-value {
              display: flex;
              align-items: center;
              justify-content: center;
              border-style: solid;
              border-color: ${theme.colors.secondary};
              height: 36px;
            }

            .free-ship-text {
              width: 108px;
              font-weight: 400;
              border-width: 1px;
            }

            .free-ship-value {
              width: 80px;
              font-weight: 600;
              border-top-width: 1px;
              border-bottom-width: 1px;
              border-right-width: 1px;
            }

            @media (max-width: 1000px) {
              font-size: 8px;

              .free-ship-text,
              .free-ship-value {
                height: 14px;
              }

              .free-ship-text {
                width: 56px;
              }

              .free-ship-value {
                width: 30px;
              }
            }
          }
        }
      }
    }
  }

  .categories {
    width: 100%;
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 230px;

    .category {
      width: 23%;
      height: 320px;
      display: flex;
      flex-direction: column;
      transition: 400ms;
      &:hover {
        scale: 1.03;
        cursor: pointer;
      }

      .category-img {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        border-top-right-radius: 30px;
        border-top-left-radius: 30px;
        width: 100%;
        height: 80%;
      }

      .category-title {
        width: 100%;
        height: 20%;
        background-color: ${theme.colors.secondary};
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: 22px;
        color: #fff;
        border-bottom-right-radius: 30px;
        border-bottom-left-radius: 30px;
      }
    }
  }

  .fav{
    width: 100%;
    height: max-content;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    .favorites-item {
      width: max-content;
      height: max-content;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      transition: 400ms;
      margin: 16px 10px;

      &:hover {
        scale: 1.1;
      }

      img {
        height: 230px;
        border-radius: 13px;
        margin-bottom: 10px;
        filter: brightness(0.9);
        box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.25);
      }

      p,
      h1 {
        font-family: 'Montserrat', sans-serif;
        font-size: 15px;
        color: ${theme.colors.secondary};
      }

      p {
        font-weight: 700;
        margin-bottom: 6px;
      }

      h1 {
        font-weight: 400;
      }
    }
  }

  .comments-container {
    width: 100%;
    height: 600px;
    background-color: ${theme.colors.secondary};

    .wave {
      width: 100%;
    }
  }

  @media (max-width: 1560px) {
    .banner {
      height: 420px;
      border-radius: 50px;
      .cep-container {
        bottom: -142px;

        .cep-content {
          width: 50%;
          height: 180px;
          border-radius: 18px;
          padding: 0px 42px;

          .cep-img {
            height: 66%;
          }

          .cep-search {
            width: 74%;

            .cep-title {
              font-size: 26px;
            }
            .cep-form {
              height: 40px;
              margin-bottom: 10px;

              input,
              button {
                font-size: 13px;
              }
              input {
                padding: 10px 14px;
              }
            }
          }
        }
      }
    }

    .categories {
      margin-top: 200px;

      .category {
        height: 250px;

        .category-title {
          font-size: 18px;
        }
      }
    }

    .favorites-title {
      font-size: 22px;
    }

    .sub-line {
      width: 90px;
      height: 4px;
    }

    .favorites-list {
      height: 180px;

      .favorites-item {
        width: 260px;

        p,
        h1 {
          font-size: 13px;
        }
      }
    }
  }

  @media (max-width: 1320px) {
    .banner {
      height: 370px;
      border-radius: 46px;
      .cep-container {
        bottom: -128px;

        .cep-content {
          width: 50%;
          height: 160px;
          border-radius: 16px;
          padding: 0px 34px;

          .cep-img {
            height: 62%;
          }

          .cep-search {
            width: 74%;

            .cep-title {
              font-size: 24px;
            }
            .cep-form {
              height: 36px;
              margin-bottom: 10px;

              input,
              button {
                font-size: 13px;
              }
              input {
                padding: 8px 12px;
              }
            }
          }
        }
      }
    }

    .categories {
      margin-top: 180px;

      .category {
        height: 240px;

        .category-title {
          font-size: 19px;
        }
      }
    }

    .favorites-list {
      height: 150px;

      .favorites-item {
        p,
        h1 {
          font-size: 11px;
        }
      }
    }
  }

  @media (max-width: 1110px) {
    .banner {
      height: 340px;
      border-radius: 44px;
      .cep-container {
        bottom: -120px;

        .cep-content {
          width: 440px;
          height: 150px;
          border-radius: 16px;
          padding: 0px 34px;

          .cep-img {
            height: 55%;
          }

          .cep-search {
            width: 74%;

            .cep-title {
              font-size: 22px;
            }
            .cep-form {
              height: 34px;
              margin-bottom: 10px;

              input,
              button {
                font-size: 12px;
              }
              input {
                width: 60%;
                padding: 6px 12px;
              }
              button {
                width: 76px;
              }
            }

            .cep-link {
              font-size: 10px;
            }
          }
        }
      }
    }

    .categories {
      margin-top: 160px;
      .category {
        height: 180px;

        .category-title {
          font-size: 13px;
        }
      }
    }

    .favorites-list {
      height: 150px;

      .favorites-item {
        p,
        h1 {
          font-size: 10px;
        }
      }
    }
  }

  @media (max-width: 940px) {
    .banner {
      height: 380px;
    }

    .favorites-list {
      height: 150px;

      .favorites-item {
        p,
        h1 {
          font-size: 9px;
        }
      }
    }
  }

  @media (max-width: 720px) {
    .banner {
      height: 270px;
      border-radius: 40px;
      .cep-container {
        bottom: -110px;

        .cep-content {
          width: 380px;
          height: 130px;
          border-radius: 14px;
          padding: 0px 26px;

          .cep-search {
            .cep-title {
              font-size: 20px;
            }
            .cep-form {
              height: 32px;
              margin-bottom: 10px;

              input,
              button {
                font-size: 11px;
              }
              input {
                width: 62%;
                padding: 6px 12px;
              }
              button {
                width: 76px;
              }
            }
          }
        }
      }
    }

    .categories {
      margin-top: 140px;
      .category {
        height: 150px;

        .category-title {
          font-size: 13px;
        }
      }
    }

    .favorites-list {
      height: 140px;

      .favorites-item {
        p,
        h1 {
          font-size: 9px;
        }
      }
    }
  }

  @media (max-width: 680px) {
    .banner {
      height: 220px;

      .cep-container {
        bottom: -110px;

        .cep-content {
          width: 380px;
          height: 130px;
          border-radius: 14px;
          padding: 0px 26px;

          .cep-search {
            .cep-title {
              font-size: 20px;
            }
            .cep-form {
              height: 32px;
              margin-bottom: 10px;

              input,
              button {
                font-size: 11px;
              }
              input {
                width: 62%;
                padding: 6px 12px;
              }
              button {
                width: 76px;
              }
            }
          }
        }
      }
    }

    .categories {
      height: max-content;
      flex-direction: column;
      margin-top: 140px;
      .category {
        width: 250px;
        height: 250px;
        margin-bottom: 40px;

        .category-img {
          width: 100%;
          height: 204px;
        }

        .category-title {
          width: 100%;
          height: 46px;
          font-size: 15px;
        }
      }
    }
  }

  @media (max-width: 580px) {
    .banner {
      height: 270px;
    }
  }

  @media (max-width: 510px) {
    .banner {
      height: 150px;

      .cep-container {
        bottom: -150px;

        .cep-content {
          width: 380px;
          height: 120px;
          border-radius: 12px;
          padding: 0px 20px;

          .cep-img {
            height: 52%;
          }

          .cep-search {
            .cep-title {
              font-size: 16px;
            }
            .cep-form {
              height: 30px;

              input,
              button {
                font-size: 11px;
              }
              input {
                width: 290;
              }
              button {
                width: 70px;
              }
            }
          }
        }
      }
    }

    .categories {
      margin-top: 200px;
    }

    .favorites-list {
      height: max-content;
      flex-direction: column;
      align-items: center;

      .favorites-item {
        width: 100%;
        margin-bottom: 18px;
        img {
          width: 160px;
          margin-bottom: 4px;
        }
        p,
        h1 {
          font-size: 13px;
        }
      }
    }
  }
`;
