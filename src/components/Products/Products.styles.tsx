import styled from "styled-components";
import theme from "../../styles/theme";

export const ProductsContainer = styled.div`
    width: 100vw;
    height: max-content;
    background-color: ${theme.colors.gray};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    padding-top: 140px;
    color: ${theme.colors.secondary};

`;
