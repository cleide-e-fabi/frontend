import styled from "styled-components";
import theme from "../../styles/theme";

export const CartContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: ${theme.colors.gray};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    padding-top: 120px;
    padding-bottom: 30px;
    color: ${theme.colors.secondary};
    font-family: 'Montserrat', sans-serif;

    .cart-empty{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .empty-icon{
            font-size: 56px;
            margin-bottom: 8px;
        }

        .empty-warning{
            font-size: 28px;
            font-weight: 400;
            margin-bottom: 14px;
        }

        .empty-button{
            width: max-content;
            height: max-content;
            box-sizing: border-box;
            padding: 18px 24px;
            background-color: ${theme.colors.secondary};
            font-size: 18px;
            font-weight: 800;
            border-radius: 12px;
            color: ${theme.colors.primary};
            border-width: 1px;
            border-style: solid;
            border-color: ${theme.colors.secondary};
            transition: 300ms;

            &:hover{
                background-color: ${theme.colors.primary};
                color: ${theme.colors.secondary};
                scale: 1.03;
                box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            }
        }
    }

    .cart-products-container{
        width: 100%;
        height: max-content;
        display: flex;
        align-items: flex-start;
        justify-content: center;

        .cart-ul, .cart-products-buy{
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
        }

        .cart-ul{
            width:42%;
            margin-right: 20px;

            .cart-header{
                width: 100%;
                display: flex;
                justify-content: flex-end;

                .cart-quantitie-text{
                    font-size: 15px;
                    width: 100px;
                    display: flex;
                    justify-content: center;
                }

                .cart-total-text{
                    width: 100px;
                    display: flex;
                    justify-content: flex-end;
                    font-size: 15px;
                    margin-bottom: 4px;
                    margin-left: 100px;
                }
            }

            .cart-li{
                width: 100%;
                height: max-content;
                border-style: solid;
                border-top-width: 1px;
                border-color: ${theme.colors.secondary};
                display: flex;
                align-items: center;
                justify-content: space-between;
                box-sizing: border-box;
                padding: 6px 0px;

                .cart-product-info{
                    height: 100%;
                    display: flex;
                    align-items: center;

                    .cart-product-img{
                    margin-top: 6px;
                    margin-bottom: 8px;
                    display: flex;
                    width: 70px;
                    }

                    .cart-product-values{
                        margin-left: 12px;
                        height: 100%;
                        display: flex;
                        flex-direction: column;

                    .cart-product-title{
                        font-size: 12px;
                        font-weight: 600;
                        margin-bottom: 10px;
                    }
                    .cart-product-price{
                        font-size: 12px;
                        font-weight: 700;
                        margin-bottom: 10px;
                        color: #339cff;

                        span{
                            text-decoration: line-through;
                            color: #727272;
                            font-size: 11px;
                            margin-left: 8px;
                        }
                    }
                    }
                }
            }

            .cart-product-quantities{
                display: flex;

                .cart-product-amount{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 100px;
                    height: 30px;
                    border: ${theme.colors.secondary} solid 1px;
                    font-size: 16px;
                    font-weight: 500;

                    .amount-minus, .amount-plus{
                        width: 30px;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: 300ms;

                        &:hover{
                            cursor: pointer;
                            background-color: ${theme.colors.secondary};
                            color: ${theme.colors.gray_bg}
                        }
                    }
                }

                .amount-price{
                    width: 100px;
                    display: flex;
                    justify-content: flex-end;
                    font-size: 15px;
                    font-weight: 600;
                    margin-left: 100px;
                }
            }
        }

        .cart-products-buy{
            width: 24%;

            .total-price{
                width: 100%;
                display: flex;
                justify-content: space-between;
                font-size: 18px;
                font-weight: 700;
                margin-bottom: 6px;
            }

            .total-economy{
                font-size: 15px;
                font-weight: 700;
                color: #339cff;
                margin-bottom: 30px;
            }

            .ship-info{
                font-size: 14px;
                font-weight: 400;
                margin-bottom: 20px;
            }

            .finalize-purchase, .keep-buying{
                width: 100%;
                height: 50px;
                border-radius: 10px;
                font-size: 18px;
                font-weight: 800;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: 300ms;
            }

            .finalize-purchase{
                margin-top: 28px;
                margin-bottom: 12px;
                background-color: ${theme.colors.secondary};
                color: ${theme.colors.primary};

                &:hover{
                    background-color: ${theme.colors.primary};
                    color: ${theme.colors.secondary};
                    scale: 1.02;
                    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
                    border-color: ${theme.colors.secondary};
                    cursor: pointer;
                }

            }

            .keep-buying{
                border-color: ${theme.colors.secondary};
                color: ${theme.colors.secondary};
                background-color: ${theme.colors.gray_bg};

                &:hover{
                    background-color: ${theme.colors.secondary};
                    color: ${theme.colors.primary};
                    scale: 1.02;
                    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
                    border-color: ${theme.colors.secondary};
                    cursor: pointer;
                }
            }
        }
    }
`;