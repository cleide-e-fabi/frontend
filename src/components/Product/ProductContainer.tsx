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
            background-color: ${theme.colors.gray_bg};
            display: flex;
            flex-direction: column;
            margin-left: 20px;
            box-sizing: border-box;
            padding: 12px 20px;
            border-radius: 12px;
            font-family: "Montserrat", sans-serif;
            color: ${theme.colors.secondary};
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

            .product-name{
                font-size: 22px;
                font-weight: 700;
                margin-bottom: 24px;
            }

            .product-cod{
                margin-bottom: 10px;
                font-size: 13px;
                color: #929191;

                .product-dis{
                    color: #971616;
                }
            }

            .product-line{
                width: 100%;
                height: 1px;
                background-color: ${theme.colors.secondary};
                margin-bottom: 12px;
            }

            .product-compare{
                font-size: 14px;
                font-weight: 600;
                color: #727272;
                margin-bottom: 4px;
                text-decoration: line-through;
            }

            .product-price{
                width: max-content;
                height: max-content;
                display: flex;
                align-items: center;
                font-weight: 700;
                margin-bottom: 8px;

                .price-value{
                    font-size: 21px;
                }

                .discount-percent{
                    width: max-content;
                    height: 100%;
                    font-size: 12px;
                    color: ${theme.colors.primary};
                    background-color: ${theme.colors.secondary};
                    box-sizing: border-box;
                    padding: 3px 3px 3px 8px;
                    display: flex;
                    clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
                    margin-left: 8px;
                }
            }

            .product-saving{
                width: max-content;
                height: max-content;
                background-color: ${theme.colors.secondary};
                color: ${theme.colors.primary};
                box-sizing: border-box;
                padding: 4px 8px 3px 8px;
                font-weight: 700;
                font-size: 10px;
                border-radius: 5px;
                margin-bottom: 8px;
            }

            .product-pix-info{
                display: flex;
                align-items: center;
                justify-content: center;
                width: max-content;
                height: max-content;
                box-sizing: border-box;
                padding: 4px 8px 4px 8px;
                border-style: solid;
                border-width: 1px;
                border-color: ${theme.colors.secondary};
                border-radius: 8px;
                margin-bottom: 10px;

                :nth-child(1){
                    font-size: 14px;
                }

                .descount-pix{
                    font-size: 13px;
                    margin-left: 4px;
                    font-weight: 400px;

                    .descount-pix-value{
                        font-size: 13px;
                        font-weight: 700;
                    }
                }
            }

            .product-pay-options{
                font-size: 12px;
                color: #727272;
                text-decoration: underline;
                margin-bottom: 40px;

                &:hover{
                    cursor: pointer;
                }
            }

            .product-count{
                width: max-content;
                height: max-content;
                display: flex;
                align-items: center;
                margin-bottom: 26px;

                .product-quantity{
                    font-size: 16px;
                    font-weight: 700;
                    margin-right: 8px;
                }

                .quantity-button{
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

                    &:hover{
                        border: none;
                    }
                }

                .plus{
                    border-bottom-left-radius: 0px;
                    border-top-left-radius: 0px;
                }

                .minus{
                    border-top-right-radius: 0px;
                    border-bottom-right-radius: 0px;
                }

                .quantity-value{
                    width: 34px;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-style: solid;
                    border-color: ${theme.colors.secondary};
                    border-width: 1px;
                }
            }

            .product-ship-text{
                font-size: 14px;
                font-weight: 700;
                margin-right: 8px;
                margin-bottom: 6px;

                span{
                    font-weight: 400;
                }
            }
            
        }
    }
`;