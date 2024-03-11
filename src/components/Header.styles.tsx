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
  background: linear-gradient(
    to right,
    ${theme.colors.secondary} 60%,
    ${theme.colors.primary} 0%
  );
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
  }

  .header-icons {
    font-family: "Montserrat", sans-serif;
    font-size: 14px;

    .header-register {
      width: max-content;
      color: ${theme.colors.secondary};
      border-bottom-width: 1px;
      border-style: solid;
      border-color: ${theme.colors.primary};
      transition: 300ms;

      &:hover{
        border-color: ${theme.colors.secondary};
      }
    }

    width: 40%;
    height: 100%;
    display: flex;
    padding: 0px 22px;

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

    .header-icons {
      font-size: 13px;
    }
  }
`;
