import styled from "styled-components";
import theme from "../../styles/theme";

export const CheckoutContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: ${theme.colors.gray};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    padding-top: 140px;
    color: ${theme.colors.secondary};

    .checkout-form{
        width: 100%;
        height: max-content;
        display: flex;
        align-items: flex-start;
        justify-content: center;

        .checkout-products{
            width: 400px;
        }
    }
`;