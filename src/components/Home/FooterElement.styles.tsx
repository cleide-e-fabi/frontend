import styled from 'styled-components';

export const FooterElement = styled.div`
  width: 25%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 400;

  img {
    height: 74%;
    margin-right: 22px;
  }

  @media (max-width: 1580px) {
    font-size: 13px;
    img {
      height: 60%;
      margin-right: 22px;
    }
  }

  @media (max-width: 920px) {
    font-size: 11px;
    img {
      height: 50%;
      margin-right: 6px;
    }
  }
  @media (max-width: 700px) {
    h1 {
      display: none;
    }
  }
`;
