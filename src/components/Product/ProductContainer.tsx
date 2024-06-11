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
        width: max-content;
        height: max-content;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        box-sizing: border-box;
        padding: 0px 60px;

        .product-info{
            max-width: 500px;
            height: max-content;
            display: flex;
            flex-direction: column;
            margin-right: 20px;
            position: relative;

            .img-list{
                width: 68px;
                height: max-content;
                background-color: ${theme.colors.gray_bg};
                margin-right: 12px;
                border-radius: 12px;
                box-sizing: border-box;
                padding: 2px 4px 2px 4px; 
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                position: absolute;
                top: 0px;
                left: -78px;

                .img-select{
                    width: 100%;
                    margin-top: 4px;
                    margin-bottom: 4px;
                    border-width: 2px;
                    border-style: solid;
                    border-color: transparent;
                    border-radius: 6px;
                    box-sizing: border-box;
                    padding: 3px;
                    transition: 300ms;
                    &:hover{
                        cursor: pointer;
                        border-color: ${theme.colors.secondary};
                    }
                }
            }

            .img-container{
                width: 100%;
                height: max-content;
                background-color: ${theme.colors.gray_bg};
                box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
                box-sizing: border-box;
                padding: 20px 20px;
                border-radius: 12px;
                margin-bottom: 20px;

                .product-img{
                    width: 100%;
                    height: 100%;
                }
            }

            .product-description{
                width: 100%;
                height: max-content;
                background-color: ${theme.colors.gray_bg};
                box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
                box-sizing: border-box;
                padding: 20px 20px;
                border-radius: 12px;

                .description-title{
                    font-family: "Montserrat", sans-serif;
                    font-size: 20px;
                    font-weight: 700;
                    margin-bottom: 20px;
                }
            }

        }

        .product-payment{
            width:500px;
            height: max-content;
            background-color: green;
            display: flex;
            flex-direction: column;
            margin-left: 20px;
        }
    }
`;