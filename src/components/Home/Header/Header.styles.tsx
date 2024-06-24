import styled from 'styled-components';
import theme from '../../../styles/theme';

export const HeaderStyles = styled.header`
  width: 80%;
  height: 50px;
  position: absolute;
  top: 65px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 9;
  display: flex;
  font-family: 'Montserrat';

  .header-mobile {
    width: 100%;
    height: 60px;
    background-color: ${theme.colors.secondary};
    display: none;
    align-items: center;
    justify-content: center;
    position: fixed;

    .header-logo-mobile {
      height: 84%;
    }

    .mobile-icon-option {
      width: max-content;
      height: max-content;
      position: absolute;
      right: 16px;
      :nth-child(1) {
        font-size: 30px;
        color: ${theme.colors.primary};
      }
    }

    .open-options {
      width: 38px;
      height: 30px;
      position: fixed;
      left: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: 300ms;

      .line-close-1,
      .line-close-2,
      .line-close-3,
      .line-open-1,
      .line-open-2,
      .line-open-3 {
        width: 100%;
        height: 6px;
        background-color: ${theme.colors.primary};
        border-radius: 3px;
        transition: 300ms;
      }

      .line-open-1 {
        transform: rotate(-45deg);
        position: absolute;
        top: 40%;
        scale: 1.04;
      }
      .line-open-3 {
        transform: rotate(45deg);
        position: absolute;
        bottom: 40%;
        scale: 1.04;
      }
      .line-open-2 {
        background-color: ${theme.colors.secondary};
      }

      &:hover {
        cursor: pointer;
      }
    }

    .close-side-div {
      transform: translateX(-100%);
    }

    .open-side-div {
      transform: translateX(0%);
    }

    .header-mobile-options {
      width: 80%;
      height: 100vh;
      position: fixed;
      top: 60px;
      left: 0px;
      background-color: ${theme.colors.secondary};
      z-index: 999;
      flex-direction: column;
      align-items: center;
      display: flex;
      justify-content: flex-start;
      box-sizing: border-box;
      padding-top: 50px;
      position: absolute;
      transition: 300ms;

      .mobile-route-option {
        width: 94%;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${theme.colors.primary};
        color: ${theme.colors.secondary};
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 14px;
      }

      .bottom-logo {
        width: 90px;
        position: absolute;
        bottom: 120px;
      }
    }
  }

  .header-logo {
    position: absolute;
    left: 60px;
    bottom: 5px;
    height: 80%;
  }

  .header-options,
  .header-icons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
  }

  .header-options {
    width: 90%;
    background-color: ${theme.colors.secondary};

    .productsNoChanged {
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.primary};
      .header-triangle {
        transition: 300ms;
      }
    }

    .productsChanged {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.secondary} !important;
      box-shadow:
        rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
        rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

      .header-triangle {
        rotate: 180deg;
        transition: 300ms;
      }
    }

    .route-option {
      height: 100%;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding: 0px 30px;
      color: ${theme.colors.primary};
      transition: 300ms;
      font-size: 14px;

      &:hover {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.secondary};
        box-shadow:
          rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
          rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
      }
    }

    .header-products {
      position: relative;
      .header-triangle {
        margin-left: 9px;
        font-size: 20px;
        transition: 0.6s;
      }

      .products-options {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        position: absolute;
        width: 100%;
        height: 0px;
        right: 0px;
        top: 118%;
        transition: 0.6s;
        background-color: ${theme.colors.secondary};
        .product-option {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 50%;
          box-sizing: border-box;
          color: ${theme.colors.primary};
          transition: 300ms;
          scale: 0;
          &:hover {
            background-color: ${theme.colors.primary};
            color: ${theme.colors.secondary};
            box-shadow:
              rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
              rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
          }
        }
      }
      &:hover {
        cursor: pointer;
        .products-options {
          height: 100px;
          background-color: ${theme.colors.secondary};

          .product-option {
            scale: 1;
          }

          @media (max-width: 1580px) {
            height: 80px;
          }
        }
        .header-triangle {
          transform: rotate(180deg);
        }
      }
    }
  }

  .header-icons {
    width: 42%;
    display: flex;
    padding: 0px 22px;
    background-color: ${theme.colors.primary};
    position: relative;

    .icon-option {
      height: 40%;
      margin-left: 40px;

      :nth-child(1) {
        height: 100%;
      }
    }

    .added {
      width: 300px;
      height: 44px;
      background-color: ${theme.colors.secondary};
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 55px;
      right: 0px;
      color: ${theme.colors.primary};
      font-family: 'Montserrat', sans-serif;
      font-size: 16px;
      font-weight: 700;
      border-radius: 8px 0px 8px 8px;
      transition: 300ms;
    }

    .added-show {
      transform: translateY(0%) translateX(0%);
      opacity: 1;
      scale: 1;
    }

    .added-hidden {
      transform: translateY(100%) translateX(100%);
      opacity: 0;
      scale: 0;
    }
  }

  @media (max-width: 1580px) {
    top: 35px;
    height: 45px;
    font-size: 13px;

    .header-options {
      .route-option {
        padding: 0px 20px;
        font-size: 13px;

        .header-triangle {
          margin-left: 7px;
          font-size: 18px;
        }
      }
    }

    .header-icons {
      font-size: 13px;
    }
  }

  @media (max-width: 1340px) {
    width: 88%;
    height: 40px;

    .header-logo {
      margin-left: -24px;
    }
    .header-options {
      width: 130%;
      .route-option {
        font-size: 12px;
      }
    }
  }

  @media (max-width: 1120px) {
    width: 100%;
    height: 60px;
    top: 0px;
    .header-options {
      display: none;
    }
    .header-icons {
      display: none;
    }

    .header-logo {
      display: none;
    }

    .header-mobile {
      display: flex;
    }
  }
`;
