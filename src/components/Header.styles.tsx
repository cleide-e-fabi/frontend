import styled from "styled-components";
import theme from "../styles/theme";

export const Header = styled.header`
  width: 80%;
  height: 50px;
  position: fixed;
  top: 65px;
  background: linear-gradient(
    to right,
    ${theme.colors.secondary} 60%,
    ${theme.colors.primary} 0%
  );
  z-index: 9;
  display: flex;
  font-family: "Montserrat";

  @media (max-width: 1400px) {
    top: 55px;
    height: 45px;
  }
`;
