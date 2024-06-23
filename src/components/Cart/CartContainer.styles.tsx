import styled from 'styled-components';
import theme from '../../styles/theme';

export const CartContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${theme.colors.gray};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-top: 120px;
  padding-bottom: 30px;
  color: ${theme.colors.secondary};
  font-family: 'Montserrat', sans-serif;

  .loading {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    right: 0;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      font-size: 44px;
      font-weight: 800;
      margin-bottom: 12px;
      color: ${theme.colors.primary};
    }

    img {
      width: 100px;
    }
  }

  .cart-empty {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .empty-icon {
      font-size: 56px;
      margin-bottom: 8px;
    }

    .empty-warning {
      font-size: 28px;
      font-weight: 400;
      margin-bottom: 14px;
    }

    .empty-button {
      width: max-content;
      height: max-content;
      box-sizing: border-box;
      padding: 18px 24px;
      background-color: ${theme.colors.secondary};
      font-size: 18px;
      font-weight: 800;
      border-radius: 12px;
      color: ${theme.colors.primary};
      border-width: 1px;
      border-style: solid;
      border-color: ${theme.colors.secondary};
      transition: 300ms;

      &:hover {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.secondary};
        scale: 1.03;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      }
    }
  }

  .cart-products-container {
    width: 100%;
    height: max-content;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    .cart-ul {
      width: 640px;
      margin-right: 20px;
      height: max-content;
      display: flex;
      flex-direction: column;
      margin-left: 20px;

      .cart-li {
        width: 100%;
        height: max-content;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        position: relative;
        padding: 8px 12px 30px 12px;
        border-radius: 12px;
        background-color: ${theme.colors.pink_bg};
        margin-bottom: 20px;

        .cart-product-info {
          height: 100%;
          display: flex;
          align-items: center;

          .cart-product-img {
            margin-top: 6px;
            margin-bottom: 8px;
            border-radius: 8px;
            display: flex;
            width: 100px;
          }

          .cart-product-values {
            width: 270px;
            margin-left: 20px;
            height: 100%;
            display: flex;
            flex-direction: column;

            .cart-product-category {
              width: max-content;
              height: max-content;
              box-sizing: border-box;
              padding: 4px 6px;
              border: ${theme.colors.secondary}, solid, 1px;
              border-radius: 6px;
              font-size: 11px;
              margin-bottom: 8px;
            }

            .cart-product-title {
              font-size: 18px;
              font-weight: 700;
              margin-bottom: 10px;
            }
          }
        }

        .cart-product-quantities {
          width: max-content;
          height: max-content;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          position: absolute;
          bottom: 12px;
          right: 12px;

          .amount-price {
            width: 100px;
            display: flex;
            justify-content: flex-end;
            font-size: 18px;
            font-weight: 500;
            margin-top: 2px;
          }

          .amount-compare_at_price {
            font-size: 13px;
            font-weight: 500;
            color: #626262;
            text-decoration: line-through;
          }

          .cart-product-delete {
            width: max-content;
            height: max-content;
            display: flex;
            margin-top: 6px;

            .delete-icon {
              width: 32px;
              height: 28px;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: ${theme.colors.secondary};
              border-radius: 8px;
              margin-right: 8px;
              transition: 300ms;

              :nth-child(1) {
                color: ${theme.colors.primary};
                font-size: 20px;
              }

              &:hover {
                cursor: pointer;
                background-color: ${theme.colors.primary};
                :nth-child(1) {
                  color: ${theme.colors.secondary};
                }
              }
            }

            .cart-product-amount {
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 100px;
              height: 28px;
              font-size: 16px;
              font-weight: 700;
              background-color: ${theme.colors.secondary};
              border-radius: 8px;
              color: ${theme.colors.primary};

              .amount-minus,
              .amount-plus {
                width: 30px;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: 300ms;
                border-radius: 6px;

                &:hover {
                  cursor: pointer;
                  background-color: ${theme.colors.primary};
                  color: ${theme.colors.secondary};
                }
              }
            }
          }
        }
      }
    }

    .cart-products-buy {
      width: 24%;
      height: max-content;

      .cart-products-info {
        width: 100%;
        height: max-content;
        box-sizing: border-box;
        padding: 34px 24px;
        background-color: ${theme.colors.pink_bg};
        margin-left: 20px;
        border-radius: 12px;
      }

      .cart-title {
        font-size: 26px;
        font-weight: 700;
        margin-bottom: 26px;
      }

      .cart-products-list {
        width: 100%;
        height: max-content;

        .cart-list-info {
          width: 100%;
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          margin-bottom: 18px;
          font-weight: 500;
          color: #626262;

          .list-info {
            display: flex;

            h5 {
              margin-left: 16px;
            }
          }
        }
      }

      .cart-ship {
        width: 100%;
        height: 28px;
        border: ${theme.colors.secondary}, solid, 1px;
        box-sizing: border-box;
        padding: 0px 7px;
        border-radius: 8px;
        font-size: 13px;
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 14px;
        margin-bottom: 30px;
      }

      .total-price {
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 6px;
      }

      .finalize-purchase,
      .keep-buying {
        width: 100%;
        height: 50px;
        border-radius: 10px;
        font-size: 15px;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 300ms;
        border: ${theme.colors.secondary} solid 1px;
      }

      .finalize-purchase {
        margin-top: 28px;
        margin-bottom: 12px;
        background-color: ${theme.colors.secondary};
        color: ${theme.colors.primary};

        span {
          margin-left: 10px;

          img {
            width: 22px;
          }
        }

        &:hover {
          background-color: ${theme.colors.primary};
          color: ${theme.colors.secondary};
          scale: 1.02;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
          border-color: ${theme.colors.secondary};
          cursor: pointer;
        }
      }

      .keep-buying {
        border-color: ${theme.colors.secondary};
        color: ${theme.colors.secondary};
        background-color: ${theme.colors.pink_bg};

        &:hover {
          background-color: ${theme.colors.secondary};
          color: ${theme.colors.primary};
          scale: 1.02;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
          border-color: ${theme.colors.secondary};
          cursor: pointer;
        }
      }
    }
  }
`;
