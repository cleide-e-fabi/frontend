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

            .cart-price{
                width: 100%;
                display: flex;
                justify-content: flex-end;
                font-size: 14px;
                margin-bottom: 4px;
            }

            .cart-li{
                width: 100%;
                height: max-content;
                border-style: solid;
                border-top-width: 1px;
                border-color: ${theme.colors.secondary};
                display: flex;
                align-items: center;

                .cart-product-img{
                    margin-top: 6px;
                    margin-bottom: 8px;
                    display: flex;
                    width: 70px;
                }
            }
        }

        .cart-products-buy{
            width: max-content;
        }
    }
`;