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

        .product-payment-container{

            width: max-content;
            height: max-content;

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

            .product-ship-text{
                font-size: 14px;
                font-weight: 700;
                margin-right: 8px;
                margin-bottom: 8px;

                span{
                    font-weight: 400;
                    font-size: 13px;
                }
            }

            .quotas-container{
                width: 100%;
                height: max-content;
                border: ${theme.colors.secondary} solid 1px;
                border-radius: 10px;
                box-sizing: border-box;
                padding: 8px 12px 12px 12px;
                margin-top: 20px;

                .quotas-flags{
                    display: flex;
                    justify-content: space-between;
                    box-sizing: border-box;
                    padding: 10px 20px;
                    .quotas-card-flags{
                        width: max-content;
                        display: flex;
                        .quota-flag{
                            width: 26px;
                            margin-left: 2px;
                            margin-right: 2px;
                        }
                    }

                    .quotas-text{
                        font-size: 15px;
                    }
                }

                .quotas-list{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    box-sizing: border-box;
                    padding: 8px 20px;
                    border-color: ${theme.colors.secondary};
                    border-style: solid;
                    border-top-width: 1px;

                    .quota-value{
                        margin-bottom: 4px;
                        font-size: 14px;
                        font-weight: 400;

                        strong{
                            font-weight: 700;
                        }
                    }

                    .quota-right{
                        display: flex;
                        justify-content: flex-end;
                    }
                }

                .fees-text{
                    margin-top: 2px;
                    font-size: 12px;
                    font-weight: 400;
                    margin-left: 20px;
                }

                .pix-discount{
                    margin-top: 12px;
                    font-size: 14px;
                    font-weight: 400;
                    border-color: ${theme.colors.secondary};
                    border-style: solid;
                    border-top-width: 1px;
                    padding-top: 10px;
                    padding-right: 20px;
                    display: flex;
                    justify-content: flex-end;

                    strong{
                        font-weight: 700;
                        margin-left: 4px;
                    }
                }
            }

            .buy-button, .cart-button{
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

            .buy-button{
                margin-top: 28px;
                margin-bottom: 12px;
                background-color: ${theme.colors.secondary};
                color: ${theme.colors.primary};

                :nth-child(1){
                    font-size: 30px;
                    margin-right: 12px;
                }

                &:hover{
                    background-color: ${theme.colors.primary};
                    color: ${theme.colors.secondary};
                    scale: 1.02;
                    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
                    border-color: ${theme.colors.secondary};
                    cursor: pointer;
                }

            }

            .cart-button{
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

            .info-credit-cards{
                height: max-content;
                margin-top: 18px;
                margin-bottom: 12px;
                display: flex;
                align-items: center;
                justify-content: flex-start;

                .card-icon{
                    font-size: 36px;
                    margin-right: 10px;
                }

                .info-credit-card-text{
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    font-size: 15px;

                    h2{
                        font-weight: 400;
                    }
                    h3{
                        font-weight: 700;
                    }
                }
            }

            .card-flags{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 14px;

                .flag{
                    width: 38px;
                    margin-left: 4px;
                    margin-right: 4px;
                }
            }   
        }

        .payment-warning{
            width:500px;
            height: max-content;
            background-color: ${theme.colors.gray_bg};
            display: flex;
            flex-direction: column;
            margin-top: 20px;
            margin-left: 20px;
            box-sizing: border-box;
            padding: 12px 20px;
            border-radius: 12px;
            font-family: "Montserrat", sans-serif;
            color: ${theme.colors.secondary};
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            position: relative;

            .warning-lock{
                font-size: 24px;
                position: absolute;
                top: 12px;
                right: 14px;
            }

            h1{
                font-weight: 700;
                margin-bottom: 12px;
                font-size: 16px;
            }

            h2{
                font-size: 16px;
            }
        }

        }
    }
`;