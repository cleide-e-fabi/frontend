import styled from "styled-components";

export default function () {
    return (
        <CheckoutContainer>
            <iframe src="https://cleidefabi.com.br/checkout" width="100%" height="100%" frameBorder="0"></iframe>
        </CheckoutContainer>
    );
}

const CheckoutContainer = styled.div`
  width: 100%;
  height: 100vh;
`;