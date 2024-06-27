import styled from 'styled-components';
export const Description = styled.div`
  p {
    font-family: 'Montserrat', sans-serif !important;
    font-size: 15px !important;
    font-weight: 400 !important;
    color: #626262 !important;
    background-color: transparent !important;
    margin-top: 4px !important;
  }

  strong {
    font-weight: 700 !important;
  }

  img {
    width: 70%;
    margin-top: 12px;
    margin-bottom: 20px;
  }

  @media (max-width: 920px) {
    margin-top: 20px;
    width: 80%;
  }
`;
