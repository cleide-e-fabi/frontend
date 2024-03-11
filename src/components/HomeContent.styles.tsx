import styled from "styled-components";
import theme from "../styles/theme";

export const HomeContent = styled.header`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 50%;
  height: 93%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${theme.colors.secondary};
  font-family: "Montserrat", sans-serif;
  box-sizing: border-box;
  padding-top: 30px;

  p {
    width: 88%;
    font-weight: 700;
    font-size: 64px;
    line-height: 70px;
  }

  sub {
    width: 88%;
    font-size: 22px;
    font-weight: 500;
    margin-top: 14px;
    line-height: 30px;
  }

  span {
    width: 88%;
    margin-top: 40px;
    button {
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.primary};
      font-weight: 900;
      letter-spacing: 1px;
      border-radius: 0px;
      box-sizing: border-box;
      padding: 10px 22px;
      font-size: 22px;

      
    }
  }

  @media (max-width: 1400px) {
    p {
      font-size: 49px;
      line-height: 52px;
    }

    sub {
      margin-top: 10px;
      font-size: 16.5px;
      line-height: 20px;
    }

    span{
        button{
            font-size: 18px;
            padding: 10px 22px;
        }
    }
  }
`;
