import styled from "styled-components";
import theme from "../../styles/theme";

export const ProductsList = styled.ul`
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 0px 40px;

    .product-item{
        width: 310px;
        height: 380px;
        border-radius: 30px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        background-color: #F2F2F2;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 24px 20px;
        position: relative;
        margin-left: 20px;
        margin-right: 20px;
        margin-top: 20px;
        margin-bottom: 20px;
        color: ${theme.colors.secondary};
        border-style: solid;
        border-width: 1px;
        border-color: transparent;
        transition: 300ms;

        &:hover{
            box-shadow: 0px 4px 4px 0px #00000040;
            border-color: ${theme.colors.secondary};
            scale: 1.02;
        }

        .product-img{
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
            border-radius: 10px;
            width: 100%;
            height: 64%;
        }

        .product-title{
            font-family: 'Montserrat', sans-serif;
            font-size: 17px;
            font-weight: 500;
        }

        .product-price{
            font-family: 'Montserrat', sans-serif;
            font-size: 18px;
            font-weight: 700;

            span{
                width: 100%;
                font-size: 16px;
                font-weight: 500;
                color: #9c9c9c;
                margin-left: 3px;
                text-decoration: line-through;
            }
        }
        
        .product-plus{
            position: absolute;
            bottom: 20px;
            right: 30px;
            &:hover{
                cursor: pointer;
            }
        }
    }
`;