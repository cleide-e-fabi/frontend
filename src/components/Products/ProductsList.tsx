import styled from 'styled-components';
import theme from '../../styles/theme';

export const ProductsList = styled.ul`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 0px 40px;

  .product-item {
    width: 210px;
    height: max-content;
    border-radius: 14px;
    box-shadow:
      rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    background-color: #f2f2f2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 8px 8px;
    position: relative;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    color: ${theme.colors.secondary};
    border-style: solid;
    border-width: 1px;
    border-color: transparent;
    transition: 300ms;

    &:hover {
      box-shadow: 0px 4px 4px 0px #00000040;
      border-color: ${theme.colors.secondary};
      scale: 1.02;
    }

    .product-img {
      filter: brightness(0.9);
      border-radius: 8px;
      width: 96%;
      margin-bottom: 14px;
    }

    .product-title {
      font-family: 'Montserrat', sans-serif;
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 8px;
    }

    .product-price {
      width: 100%;
      font-family: 'Montserrat', sans-serif;
      font-size: 15px;
      font-weight: 700;
      margin-bottom: 4px;

      span {
        width: 100%;
        font-size: 14px;
        font-weight: 500;
        color: #9c9c9c;
        margin-left: 3px;
        text-decoration: line-through;
      }
    }

    .product-quota {
      width: 100%;
      font-size: 14px;
      font-weight: 400;
      margin-bottom: 8px;

      span {
        font-weight: 600;
      }
    }
  }
`;
