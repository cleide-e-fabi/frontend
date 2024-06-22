import styled from 'styled-components';
import theme from '../../styles/theme';

export const CounterStyles = styled.div`
  width: max-content;
  height: max-content;
  display: flex;
  align-items: center;
  margin-bottom: 26px;

  .product-quantity {
    font-size: 15px;
    font-weight: 700;
    margin-right: 10px;
  }

  .quantity-buttons-container {
    width: max-content;
    height: max-content;
    display: flex;
    border-color: ${theme.colors.secondary};
    border-style: solid;
    border-width: 2px;
    border-radius: 9px;

    .quantity-button {
      width: 36px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.primary};
      font-size: 20px;
      font-weight: 900;
      box-sizing: border-box;
      padding: 0px 0px;

      &:hover {
        border: none;
      }
    }

    .quantity-value {
      width: 34px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: 700;
    }
  }
`;
