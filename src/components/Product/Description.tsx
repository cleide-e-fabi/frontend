import styled from "styled-components";
import theme from "../../styles/theme";

export const Description = styled.div`

    p{
        font-family: "Montserrat", sans-serif !important;
        font-size: 15px !important;
        font-weight: 400 !important;
        color: ${theme.colors.secondary} !important;
        text-align: justify !important;
        
    }

    strong{
        font-weight: 700 !important;
    }

    img{
        width: 100%;
        margin-top: 12px;
        margin-bottom: 20px;
    }
`;