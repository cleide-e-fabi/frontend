import styled from 'styled-components';
import theme from '../../../styles/theme';

export const CommentsSectionStyles = styled.section`
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
    font-family: 'Montserrat', sans-serif;
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
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 25px;
        color: ${theme.colors.secondary};
        margin-bottom: 16px;
      }

      .comment-text {
        width: 84%;
        font-family: 'Montserrat', sans-serif;
        font-size: 25px;
        font-weight: 400;
        color: ${theme.colors.secondary};
      }

      .comment-date {
        position: absolute;
        font-family: 'Montserrat', sans-serif;
        font-size: 25px;
        font-weight: 600;
        color: ${theme.colors.secondary};
        bottom: 24px;
        right: 40px;
      }
    }
  }

  @media (max-width: 1580px) {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 88%);
    background-color: ${theme.colors.secondary};
    .wave {
      margin-bottom: 70px;
    }

    .comment-title {
      font-size: 30px;

      line-height: 36px;
    }
    .comment-cards {
      margin-bottom: 280px;

      .comment-card {
        width: 360px;
        height: 240px;
        border-radius: 36px;
        padding: 10px 22px;

        .comment-stars {
          margin-top: 14px;
          margin-bottom: 16px;

          .star {
            width: 44px;
            font-size: 36px;
          }
        }

        .product-name {
          font-size: 22px;
          margin-bottom: 12px;
        }

        .comment-text {
          font-size: 22px;
        }

        .comment-date {
          font-size: 22px;
          bottom: 20px;
          right: 32px;
        }
      }
    }
  }

  @media (max-width: 1320px) {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 90%);

    .comment-title {
      font-size: 28px;

      line-height: 32px;
    }

    .comment-cards {
      margin-bottom: 220px;

      .comment-card {
        width: 330px;
        height: 210px;
        border-radius: 30px;
        padding: 10px 22px;

        .comment-stars {
          margin-top: 12px;
          margin-bottom: 16px;

          .star {
            width: 44px;
            font-size: 32px;
          }
        }

        .product-name {
          font-size: 20px;
          margin-bottom: 11px;
        }

        .comment-text {
          font-size: 18px;
        }

        .comment-date {
          font-size: 17px;
          bottom: 20px;
          right: 30px;
        }
      }
    }
  }

  @media (max-width: 1170px) {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 92%);

    .comment-title {
      font-size: 27px;
      line-height: 30px;
    }

    .comment-cards {
      margin-bottom: 200px;

      .comment-card {
        width: 300px;
        height: 180px;
        border-radius: 28px;
        padding: 7px 19px;

        .comment-stars {
          margin-top: 12px;
          margin-bottom: 16px;

          .star {
            width: 44px;
            font-size: 28px;
          }
        }

        .product-name {
          font-size: 18px;
          margin-bottom: 11px;
        }

        .comment-text {
          font-size: 16px;
        }

        .comment-date {
          font-size: 15px;
          bottom: 20px;
          right: 30px;
        }
      }
    }
  }

  @media (max-width: 1170px) {
    
    .comment-cards {

      .comment-card {
        width: 200px;
        height: 200px;
        border-radius: 28px;
        padding: 7px 19px;

        .comment-stars {
          width: 100%;
          margin-top: 12px;
          margin-bottom: 14px;
          justify-content: space-around;

          .star {
            width: max-content;
            font-size: 24px;
          }
        }

        .product-name {
          font-size: 15px;
          margin-bottom: 11px;
        }

        .comment-text {
          font-size: 14px;
        }

        .comment-date {
          font-size: 12px;
          bottom: 20px;
          right: 30px;
        }
      }
    }
  }

  @media (max-width: 700px) {

    .comment-title {
      font-size: 22px;
      line-height: 30px;
    }
    
    .comment-cards {
      align-items: center;
      flex-direction: column;

      .comment-card {
        width: 300px;
        height: 240px;
        border-radius: 28px;
        padding: 7px 19px;
        margin-bottom: 30px;

        .comment-stars {
          width: 100%;
          margin-top: 12px;
          margin-bottom: 14px;
          justify-content: space-around;

          .star {
            width: max-content;
            font-size: 32px;
          }
        }

        .product-name {
          font-size: 19px;
          margin-bottom: 11px;
        }

        .comment-text {
          font-size: 16px;
        }

        .comment-date {
          font-size: 14px;
        }
      }
    }
  }
`;
