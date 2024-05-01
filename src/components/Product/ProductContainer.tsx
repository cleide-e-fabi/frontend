import styled from "styled-components";
import theme from "../../styles/theme";

export const ProductContainer = styled.div`
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

    .product-content{
        width: 100%;
        height: max-content;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        box-sizing: border-box;
        padding: 0px 60px;

        .product-info{
            width: 46%;
            height: 800px;
            background-color: red;
            display: flex;
            flex-direction: column;
            margin-right: 20px;
        }

        .product-payment{
            width: 38%;
            height: 800px;
            background-color: green;
            display: flex;
            flex-direction: column;
            margin-left: 20px;
        }
    }
`;