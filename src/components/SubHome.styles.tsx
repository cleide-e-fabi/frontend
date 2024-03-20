import styled from "styled-components";
import theme from "../styles/theme";
import banner from "../assets/imgs/banner.png";

export const SubHome = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: max-content;
  background-color: ${theme.colors.primary};
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
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
          rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
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
              box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08),
                0 2px 2px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.16),
                0 8px 8px rgba(0, 0, 0, 0.2);
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
      border-radius: 30px;
      background-color: #d7d7d7;
    }
  }
`;
