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

  .payment-warning {
    width: 94%;
    height: max-content;
    background-color: ${theme.colors.pink_bg};
    display: none;
    flex-direction: column;
    margin-top: 20px;
    box-sizing: border-box;
    padding: 12px 20px;
    border-radius: 12px;
    font-family: 'Montserrat', sans-serif;
    color: ${theme.colors.secondary};
    position: relative;

    .warning-lock {
      font-size: 24px;
      position: absolute;
      top: 12px;
      right: 14px;
    }

    h1 {
      font-weight: 700;
      margin-bottom: 12px;
      font-size: 16px;
    }

    h2 {
      font-size: 16px;
      color: #929292;
    }
  }

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

    @media (max-width: 1200px) {
      p {
        font-size: 38px;
      }

      img {
        width: 90px;
      }
    }

    @media (max-width: 900px) {
      p {
        font-size: 30px;
      }

      img {
        width: 80px;
      }
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
      transition: 400ms;

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
              transition: 400ms;

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
                transition: 400ms;
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
      width: 450px;
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

      .frete-warning {
        width: 100%;
        font-size: 10px;
        margin-top: 5px;
        display: flex;
        justify-content: flex-end;
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
        transition: 400ms;
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

  @media (max-width: 1220px) {
    .cart-products-container {
      .cart-ul {
        width: 500px;

        .cart-li {
          width: 100%;
          padding: 6px 10px 26px 10px;
          border-radius: 10px;
          margin-bottom: 16px;

          .cart-product-info {
            .cart-product-img {
              margin-top: 4px;
              margin-bottom: 4px;
              border-radius: 6px;
              width: 78px;
            }

            .cart-product-values {
              width: 240px;
              margin-left: 14px;

              .cart-product-category {
                padding: 3px 4px;
                font-size: 9px;
                margin-bottom: 6px;
              }

              .cart-product-title {
                font-size: 15px;
              }
            }
          }

          .cart-product-quantities {
            bottom: 10px;
            right: 10px;

            .amount-price {
              width: 80px;
              font-size: 15px;
            }

            .amount-compare_at_price {
              font-size: 12px;
            }

            .cart-product-delete {
              margin-top: 4px;

              .delete-icon {
                width: 30px;
                height: 26px;
                border-radius: 6px;
                margin-right: 5px;

                :nth-child(1) {
                  font-size: 18px;
                }
              }

              .cart-product-amount {
                width: 90px;
                height: 26px;
                font-size: 15px;
                border-radius: 6px;

                .amount-minus,
                .amount-plus {
                  border-radius: 4px;
                }
              }
            }
          }
        }
      }

      .cart-products-buy {
        width: 370px;

        .cart-products-info {
          width: 100%;
          padding: 20px 14px;
          margin-left: 0px;
          border-radius: 10px;
        }

        .cart-title {
          font-size: 22px;
          margin-bottom: 18px;
        }

        .cart-products-list {
          .cart-list-info {
            font-size: 11px;
            margin-bottom: 12px;

            .list-info {
              h5 {
                margin-left: 10px;
              }
            }
          }
        }

        .cart-ship {
          width: 100%;
          height: 24px;
          border-radius: 6px;
          font-size: 11px;
          margin-top: 10px;
          margin-bottom: 20px;
        }

        .total-price {
          font-size: 16px;
          margin-bottom: 0px;
        }

        .finalize-purchase,
        .keep-buying {
          width: 100%;
          height: 44px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
        }

        .finalize-purchase {
          margin-top: 24px;
          margin-bottom: 10px;

          span {
            margin-left: 8px;
            img {
              width: 18px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 930px) {
    padding-top: 50px;
    .cart-products-container {
      flex-direction: column;
      align-items: center;

      .cart-ul {
        width: 90%;
        margin-right: 20px;

        .cart-li {
          width: 100%;
          padding: 8px 12px 30px 12px;
          border-radius: 12px;
          margin-bottom: 12px;

          .cart-product-info {
            .cart-product-img {
              margin-top: 6px;
              margin-bottom: 8px;
              border-radius: 8px;
              width: 100px;
            }

            .cart-product-values {
              width: 270px;
              margin-left: 20px;
              height: 100%;

              .cart-product-category {
                padding: 4px 6px;
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
            bottom: 12px;
            right: 12px;

            .amount-price {
              width: 100px;
              font-size: 18px;
              font-weight: 500;
              margin-top: 2px;
            }

            .amount-compare_at_price {
              font-size: 13px;
            }

            .cart-product-delete {
              margin-top: 6px;

              .delete-icon {
                width: 32px;
                height: 28px;
                border-radius: 8px;
                margin-right: 8px;

                :nth-child(1) {
                  font-size: 20px;
                }
              }

              .cart-product-amount {
                width: 100px;
                height: 28px;
                font-size: 16px;
                font-weight: 700;

                border-radius: 8px;

                .amount-minus,
                .amount-plus {
                  width: 30px;

                  border-radius: 6px;
                }
              }
            }
          }
        }
      }

      .cart-products-buy {
        width: 90%;

        .cart-title {
          font-size: 26px;
          margin-bottom: 22px;
        }

        .cart-products-list {
          .cart-list-info {
            font-size: 13px;
            margin-bottom: 18px;
          }
        }

        .cart-ship {
          width: 100%;
          height: 28px;
          border-radius: 8px;
          font-size: 13px;
        }

        .total-price {
          font-size: 18px;
          margin-top: 32px;
        }

        .finalize-purchase,
        .keep-buying {
          height: 50px;
          border-radius: 10px;
          font-size: 15px;
        }

        .finalize-purchase {
          margin-top: 28px;
          margin-bottom: 12px;

          span {
            img {
              width: 22px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 640px) {
    .cart-products-container {
      .payment-warning {
        display: flex;
      }
      .cart-ul {
        margin-right: 0px;
        margin-left: 0px;

        .cart-li {
          border-radius: 10px;

          .cart-product-info {
            .cart-product-img {
              margin-top: 0px;
              margin-bottom: 2px;
              border-radius: 4px;
              width: 90px;
            }

            .cart-product-values {
              margin-top: -20px;
              width: 270px;
              margin-left: 8%;
              height: 100%;

              .cart-product-category {
                padding: 3px 5px;
                border-radius: 5px;
                font-size: 10px;
                margin-bottom: 6px;
              }

              .cart-product-title {
                font-size: 15px;
              }
            }
          }

          .cart-product-quantities {
            bottom: 8px;
            right: 8px;

            .amount-price {
              font-size: 15px;
            }

            .amount-compare_at_price {
              font-size: 11px;
            }

            .cart-product-delete {
              .delete-icon {
                width: 28px;
                height: 24px;
                border-radius: 5px;
                margin-right: 5px;

                :nth-child(1) {
                  font-size: 18px;
                }
              }

              .cart-product-amount {
                width: 90px;
                height: 24px;
                font-size: 14px;
                border-radius: 5px;
              }
            }
          }
        }
      }

      .cart-products-buy {
        width: 100%;
        border: ${theme.colors.secondary}, solid, 2px;
        border-top-right-radius: 24px;
        border-top-left-radius: 24px;
        display: flex;
        justify-content: center;
        margin-top: 16px;

        .cart-products-info {
          width: 94%;
          border-top-right-radius: 30px;
          border-top-left-radius: 30px;
          background-color: ${theme.colors.gray};
          .cart-title {
            font-size: 24px;
            margin-left: 20px;
            margin-bottom: 22px;
          }

          .cart-products-list {
            .cart-list-info {
              font-size: 11px;
              margin-bottom: 14px;
            }
          }

          .cart-ship {
            height: 40px;
            border-radius: 10px;
            font-size: 15px;
            padding: 0px 20px;
          }

          .total-price {
            font-size: 19px;
          }

          .finalize-purchase {
            margin-top: 34px;
          }
        }
      }
    }
  }

  @media (max-width: 500px) {
    .cart-products-container {
      .cart-ul {
        .cart-li {
          border-radius: 8px;

          .cart-product-info {
            width: 100%;
            .cart-product-img {
              width: 80px;
            }

            .cart-product-values {
              margin-top: -30px;
              width: 80%;
              margin-left: 3%;

              .cart-product-category {
                font-size: 9px;
              }

              .cart-product-title {
                font-size: 12px;
              }
            }
          }

          .cart-product-quantities {
            bottom: 6px;
            right: 6px;

            .amount-price {
              font-size: 13px;
            }

            .amount-compare_at_price {
              font-size: 10px;
            }

            .cart-product-delete {
              .delete-icon {
                width: 24px;
                height: 22px;
                border-radius: 3px;
                margin-right: 3px;

                :nth-child(1) {
                  font-size: 16px;
                }
              }

              .cart-product-amount {
                width: 80px;
                height: 22px;
                font-size: 14px;
                border-radius: 3px;
              }
            }
          }
        }
      }
    }
  }
`;
