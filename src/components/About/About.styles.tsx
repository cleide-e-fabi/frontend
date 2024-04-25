import styled from "styled-components";
import theme from "../../styles/theme";

export const AboutContainer = styled.div`

    width: 100vw;
    height: max-content;
    background-color: ${theme.colors.gray};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    padding-top: 170px;
    .about-title {
        width: 100%;
        margin-top: 40px;
        margin-bottom: 8px;
        font-family: "Montserrat", sans-serif;
        font-size: 25px;
        font-weight: 700;
        color: ${theme.colors.secondary};
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 0px 40px;

        :nth-child(1){
            margin-left: 20px;
            margin-bottom: 2px;
        }

        .about-line {
            width: 142px;
            height: 5px;
            background-color: ${theme.colors.secondary};
            margin-bottom: 14px;
        }
    }

    .about-content{
        width: 100%;
        height: max-content;
        display: flex;
        align-items: center;
        justify-content: space-around;
        box-sizing: border-box;
        padding-top: 40px;
        padding-bottom: 80px;

        .div-container{
            width: 480px;
            height: 530px;
            border-radius: 37px;
            background-color:#F2F2F2;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
        }

        .about-text{
            width: 45%;
            height: max-content;
            font-family: 'Montserrat', sans-serif;
            font-size: 22px;
            font-weight: 500;
            line-height: 31.69px;
            color: ${theme.colors.secondary};
        }

    }

    .about-footer{
        width: 100%;
        height: 500px;
        background-color: ${theme.colors.secondary};
        clip-path: polygon(0 0, 100% 39%, 100% 100%, 0% 100%);
        position: relative;
        box-sizing: border-box;
        padding-top: 80px;
        padding-left: 80px;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        .about-footer-wpp{
            width: 80px;
            right: 50px;
            bottom: 50px;
            position: absolute;
        }

        .about-footer-info{
            width: 20%;
            height: 120px;
            font-family: "Montserrat", sans-serif;
            font-size: 20px;
            margin-left: 150px;
            text-align: justify;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            h1{
                font-weight: 900;
                margin-bottom: 8px;
            }

            h2{
                font-weight: 600;
            }
        }
    }
`;