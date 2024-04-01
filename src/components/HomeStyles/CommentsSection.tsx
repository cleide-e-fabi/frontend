import styled from "styled-components";
import theme from "../../styles/theme";

export const CommentsSection = styled.section`
  width: 100%;
  height: max-content;
  box-sizing: border-box;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 78%);
  background-color: ${theme.colors.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  .wave {
    width: 100%;
    margin-bottom: 90px;
  }

  .comment-title {
    font-family: "Montserrat", sans-serif;
    font-size: 38px;
    font-weight: 700;
    line-height: 48.76px;
    text-align: center;
    color: #fff;
    margin-bottom: 90px;

    strong {
      font-weight: 900;
    }
  }
  .comment-cards {
    width: 90%;
    height: max-content;
    display: flex;
    justify-content: space-around;
    margin-bottom: 360px;

    .comment-card {
      width: 438px;
      height: 304px;
      border-radius: 44px;
      box-sizing: border-box;
      padding: 20px 34px;
      background-color: ${theme.colors.primary};
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;

      .comment-stars {
        display: flex;
        margin-bottom: 20px;

        .star {
          width: 52px;
          font-size: 46px;
          color: ${theme.colors.secondary};
        }
      }

      .product-name {
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        font-size: 25px;
        color: ${theme.colors.secondary};
        margin-bottom: 16px;
      }

      .comment-text {
        width: 84%;
        font-family: "Montserrat", sans-serif;
        font-size: 25px;
        font-weight: 400;
        color: ${theme.colors.secondary};
      }

      .comment-date {
        position: absolute;
        font-family: "Montserrat", sans-serif;
        font-size: 25px;
        font-weight: 600;
        color: ${theme.colors.secondary};
        bottom: 24px;
        right: 40px;
      }
    }
  }
`;
