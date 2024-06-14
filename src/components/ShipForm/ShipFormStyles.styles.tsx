import styled from "styled-components";
import theme from "../../styles/theme";

export const ShipFormStyles = styled.div`

    .product-cep-search{
        display: flex;
                width: max-content;
                height: max-content;
                align-items: center;
                margin-bottom: 6px;

                .product-cep-form{
                    display: flex;

                    button{
                        width: max-content;
                        height: 38px;
                        border-bottom-left-radius: 0px;
                        border-top-left-radius: 0px;
                        border-bottom-right-radius: 6px;
                        border-top-right-radius: 6px;
                        font-size: 14px;
                        box-sizing: border-box;
                        padding: 0px 8px;
                        background-color: ${theme.colors.secondary};
                        color: ${theme.colors.primary};
                        display: flex;
                        align-items: center;

                        .loading-gif{
                            height: 50%;
                            margin-left: 10px;
                        }

                    }

                    input{
                        width: 140px;
                        height: 38px;
                        background-color: ${theme.colors.gray_bg};
                        border-style: solid;
                        border-width: 1px;
                        border-color: ${theme.colors.secondary};
                        border-bottom-left-radius: 6px;
                        border-top-left-radius: 6px;
                        box-sizing: border-box;
                        padding: 6px 10px;
                        outline: none;
                        color: ${theme.colors.secondary};
                        font-size: 14px;

                        &::-webkit-inner-spin-button {
                            -webkit-appearance: none;
                        }
                        &::-webkit-input-placeholder {
                            color: ${theme.colors.secondary};
                            font-weight: 500;
                        }
                    }
                }

                .product-cep-link{
                    margin-left: 12px;
                    font-size: 12px;
                    color: #727272;
                    text-decoration: underline;
                }
    }

    .invalide-cep{
        font-size: 14px;
        font-weight: 500;
        color: #ff0000;
        margin-bottom: 12px;
    }

    .free-ship-container{
        width: max-content;
        height: max-content;
        display: flex;
        font-size: 14px;

        .free-ship-text, .free-ship-value{
            display: flex;
            align-items: center;
            justify-content: center;
            border-style: solid;
            border-color: ${theme.colors.secondary};
            height: 36px;
        }

        .free-ship-text{
            width: 108px;
            font-weight: 400;
            border-width: 1px;
        }

        .free-ship-value{
            width: 80px;
            font-weight: 600;
            border-top-width: 1px;
            border-bottom-width: 1px;
            border-right-width: 1px;
        }

    }
`;