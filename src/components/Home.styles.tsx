import styled from "styled-components";
import theme from "../styles/theme";

export const StyledHome = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: ${theme.colors.primary};

  .middle-content{
    width: 100%;
    height: 93%;
    display: flex;
  }
`;
