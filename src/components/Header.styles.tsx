import styled from "styled-components";
import theme from "../styles/theme";

export const Header = styled.header`
  width: 80%;
  height: 50px;
  position: fixed;
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

  .produtos-option {
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

    .route-option {
      height: 100%;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding: 0px 30px;
      color: ${theme.colors.primary};
      transition: 300ms;
      font-size: 14px;

      .header-triangle {
        margin-left: 9px;
        font-size: 20px;

        &:hover {
          cursor: pointer;
        }
      }
      &:hover {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.secondary};
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
          rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
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
    top: 55px;
    height: 45px;
    font-size: 13px;

    .header-options {
      font-size: 13px;
      .route-option {
        padding: 0px 20px;

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
