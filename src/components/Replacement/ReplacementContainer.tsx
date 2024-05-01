import styled from "styled-components";
import theme from "../../styles/theme";

export const ReplacementContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${theme.colors.gray};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    padding-top: 140px;
    color: ${theme.colors.secondary};

    .replacement-text{
        width: 100%;
        height: max-content;
        box-sizing: border-box;
        padding: 0px 200px;
        text-align: justify;
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        font-size: 18px;

        h2, strong{
            font-weight: 700;
        }
    }

`;