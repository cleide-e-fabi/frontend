import styled from "styled-components";
import theme from "../styles/theme";

export const HomeContent = styled.header`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 50%;
  height: 92%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${theme.colors.secondary};

  p{
    width: 90%;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 50px;

  }
`;
