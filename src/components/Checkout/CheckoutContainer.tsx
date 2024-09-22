import styled from 'styled-components';
import theme from '../../styles/theme';

export const CheckoutContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${theme.colors.gray};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-top: 140px;
  color: ${theme.colors.secondary};

  .checkout-form {
    width: 100%;
    height: max-content;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    .checkout-list {
      width: max-content;
      .checkout-li {
        width: 754px;
        height: max-content;
        background-color: #f8f2f2;
        border-radius: 20px;
        margin-bottom: 20px;
        box-sizing: border-box;
        padding: 20px 20px;
        display: flex;
        justify-content: space-between;

        .product-img-check {
          height: 120px;
        }

        .product-info-check {
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          padding-top: 16px;
          margin-left: 20px;
          h1 {
            font-size: 22px;
            font-weight: 500;
            margin-bottom: 8px;
          }
          h2 {
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 12px;

            span {
              margin-left: 4px;
              text-decoration: line-through;
              color: #7c7b7b;
            }
          }

          h3 {
            font-size: 14px;
            font-weight: 900;

            span {
              font-weight: 500;
            }
          }
        }
      }
    }

    .empty-checkout {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      :nth-child(1) {
        font-size: 100px;
      }
      h6 {
        font-size: 34px;
        font-weight: 600;
      }

      .empty-checkout-button {
        width: max-content;
        height: max-content;
        box-sizing: border-box;
        padding: 24px 34px;
        background-color: ${theme.colors.secondary};
        font-size: 18px;
        font-weight: 800;
        border-radius: 12px;
        color: ${theme.colors.primary};
        border-width: 1px;
        border-style: solid;
        border-color: ${theme.colors.secondary};
        transition: 400ms;
        margin-top: 30px;

        &:hover {
          background-color: ${theme.colors.primary};
          color: ${theme.colors.secondary};
          scale: 1.03;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        }
      }
    }

    .checkout-confirme {
      width: 500px;
      height: max-content;
      background-color: #f8f2f2;
      box-sizing: border-box;
      border-radius: 20px;
      padding: 20px 20px;
      margin-left: 40px;

      .checktou-title {
        font-size: 26px;
        font-weight: 700;
        margin-bottom: 30px;
      }

      .checkout-total {
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        font-weight: 800;
        margin-bottom: 4px;
      }
      .checkout-discount {
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 10px;

        span {
          font-weight: 500;
        }
      }

      .checkout-link {
        margin-top: 50px;
        width: 100%;
        height: 50px;
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${theme.colors.secondary};

        a {
          font-size: 22px;
          font-weight: 700;
          color: ${theme.colors.primary};
        }

        .checkout-loading {
          width: max-content;
          height: max-content;
          display: flex;

          .processing {
            font-size: 20px;
            font-weight: 700;
            color: ${theme.colors.primary};
            margin-right: 10px;
          }

          .img-loading {
            width: 20px;
          }
        }

        .waiting-container {
          &:hover {
            cursor: progress;
          }
        }

        .confirme-container {
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
`;
