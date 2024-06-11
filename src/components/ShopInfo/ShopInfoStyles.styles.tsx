import styled from "styled-components";
import theme from "../../styles/theme";

export const ShopInfoStyles = styled.ul`

    width: 80%;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 100px;
    color: ${theme.colors.secondary};

    .info{
        width: 20%;
        height: 100px;
        display: flex;
        align-items: center;

        .info-icon{
            width: 50px;
            height: 100%;
            display: flex;
            align-items: flex-start;

            :nth-child(1){
                width: 100%;
                height: auto;
                margin-top: 40%;
           }
        }

        .info-icon-2{
            width: 80px;
            height: 100%;
            display: flex;
            align-items: flex-start;

            :nth-child(1){
                width: 100%;
                height: auto;
                margin-top: 48%;
            }
        }

        .info-text{
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            margin-left: 16px;

            p, h6{
                width: 100%;
                height: max-content;
                font-family: "Montserrat", sans-serif;
                font-size: 16px;
            }

            p{
                font-weight: 700;
                margin-bottom: 6px;
            }
        }
    }

`;