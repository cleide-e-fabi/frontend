import styled from "styled-components";
import theme from "../styles/theme";

export const StyledHome = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colors.primary};
`;
