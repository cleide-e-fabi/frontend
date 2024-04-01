import styled from "styled-components";
import theme from "../../styles/theme";
import banner from "../../assets/imgs/banner.png";

export const SubHome = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: max-content;
  box-sizing: border-box;
  padding: 45px 30px;
  background-color: ${theme.colors.gray};

  .banner {
    width: 100%;
    height: 600px;
    border-radius: 60px;
    position: relative;
    background-image: url(${banner});
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
            font-family: "Montserrat", sans-serif;
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
              font-family: "Montserrat", sans-serif;
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
            }
          }

          .cep-link {
            font-family: "Montserrat", sans-serif;
            font-size: 11px;
            color: #626262;
            text-decoration: underline;
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
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 22px;
        color: #fff;
        border-bottom-right-radius: 30px;
        border-bottom-left-radius: 30px;
      }
    }
  }

  .favorites-title {
    width: 100%;
    margin-top: 40px;
    margin-bottom: 8px;
    font-family: "Montserrat", sans-serif;
    font-size: 25px;
    font-weight: 700;
    color: ${theme.colors.secondary};
  }

  .sub-line {
    width: 120px;
    height: 5px;
    background-color: ${theme.colors.secondary};
    margin-bottom: 14px;
  }

  .favorites-list {
    width: 100%;
    height: 240px;
    display: flex;
    justify-content: space-between;

    .favorites-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;

      .add-item {
        position: absolute;
        right: 0px;
        top: 0px;
        width: 20px;
        height: 20px;
      }

      img {
        height: 80%;
        margin-bottom: 8px;
        margin-left: 24px;
      }

      p,
      h1 {
        font-family: "Montserrat", sans-serif;
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

    .custom-container {
      width: 46%;
      display: flex;
      align-items: center;
      background-color: rgba(234, 234, 234, 1);
      position: relative;
      border-radius: 38px;

      .custom-text {
        font-family: "Montserrat", sans-serif;
        font-size: 44px;
        font-weight: 700;
        color: ${theme.colors.secondary};
        margin-left: 8%;
      }

      .custom-img {
        position: absolute;
        height: 100%;
        right: 20px;
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
`;
