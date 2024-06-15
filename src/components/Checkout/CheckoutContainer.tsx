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

        .checkout-products, .checkout-inputs{
            height: max-content;
            background-color: ${theme.colors.gray_bg};
            display: flex;
            flex-direction: column;
            margin-left: 20px;
            box-sizing: border-box;
            padding: 20px 20px;
            border-radius: 12px;
            font-family: "Montserrat", sans-serif;
            color: ${theme.colors.secondary};
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        }

        .checkout-inputs{
            width:540px;

            .form-title{
                font-size: 18px;
                font-weight: 700;
                margin-bottom: 4px;
            }

            .form-subtitle{
                font-size: 16px;
                font-weight: 400;
                margin-bottom: 16px;
            }

            input, .ship-mothod{
                width: 100%;
                height: 46px;
                font-family: "Montserrat", sans-serif;
                font-size: 16px;
                font-weight: 500;
                border-radius: 8px;
                background-color: ${theme.colors.gray};
                border: none;
                box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
                margin-bottom: 14px;
                color: #000000;
                box-sizing: border-box;
                padding: 0px 20px;

                &::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                }
            }

            .personal-inputs, .address-city{
                width: 100%;
                height: max-content;
                display: flex;
                justify-content: space-between;
                
                input{
                    width: 48%;
                }
            }

            .personal-inputs, .adress-last{
                margin-bottom: 30px;
            }

            .address-comp{
                width: 100%;
                height: max-content;
                display: flex;
                justify-content: space-between;
                
                :nth-child(1){
                    width: 66%;
                }

                :nth-child(2){
                    width: 30%;
                }
            }

            .cep-input{
                width: 48%;
            }

            .ship-mothod{
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0px 60px;
                position: relative;
                margin-bottom: 44px;

                .ship-check{
                    position: absolute;
                    left: 20px;
                    font-size: 18px;
                    color: #01fc50;
                }
            }

            .form-card{
                .card-details{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;

                    .card-comp{
                        width: 38%;
                        .input-card-comp{
                            width: 100%;
                        }

                    }
                }
            }

        }

        .checkout-products{
            width: 400px;
        }
    }
`;