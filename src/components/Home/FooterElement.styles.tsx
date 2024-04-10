import styled from "styled-components";

export const FooterElement = styled.div`
  width: 25%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: 400;

  img {
    height: 74%;
    margin-right: 22px;
  }

  @media (max-width: 1400px) {
    font-size: 13px;

    img {
      margin-right: 18px;
    }
  }
`;
