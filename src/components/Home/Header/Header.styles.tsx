import styled from "styled-components";
import theme from "../../../styles/theme";

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
  font-family: "Montserrat";

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
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
  }

  .header-options {
    width: 58%;
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
      box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
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
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
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
          height: 25%;
          box-sizing: border-box;
          color: ${theme.colors.primary};
          transition: 300ms;
          scale: 0;
          &:hover {
            background-color: ${theme.colors.primary};
            color: ${theme.colors.secondary};
            box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
              rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
          }
        }
      }
      &:hover {
        cursor: pointer;
        .products-options {
          height: 200px;
          background-color: ${theme.colors.secondary};

          .product-option{
            scale: 1;
          }

          @media (max-width: 1400px) {
            height: 180px;
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

    .header-register {
      width: max-content;
      color: ${theme.colors.secondary};
      border-bottom-width: 1px;
      border-style: solid;
      border-color: ${theme.colors.primary};
      transition: 300ms;

      &:hover {
        border-color: ${theme.colors.secondary};
      }
    }

    .icon-option {
      height: 40%;
      margin-left: 40px;

      :nth-child(1) {
        height: 100%;
      }
    }
  }

  @media (max-width: 1400px) {
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
`;
