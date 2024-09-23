import styled from 'styled-components';

export default function Heart() {
  return (
    <HeartStyles className="container">
      <div className="heart"></div>
    </HeartStyles>
  );
}

const HeartStyles = styled.div`
  display: flex;
  width: max-content;
  height: max-content;
  position: absolute;
  z-index: 999;
  top: 18px;
  right: 22px;

  .heart {
    width: 28px;
    aspect-ratio: 1;
    border-image: radial-gradient(#f7f7f7 69%, #0000 70%) 84.5% fill/100%;
    clip-path: polygon(0 0, 100% 0, 100% 41%, 50% 91%, 0 41%);
    transition: 400ms;

    &:hover {
      scale: 1.02;
      border-image: radial-gradient(#c70000ce 69%, #0000 70%) 84.5% fill/100%;
    }
  }

  @media (max-width: 1020px) {
    .heart {
      width: 22px;
      top: 14px;
      right: 18px;
    }
  }

  @media (max-width: 590px) {
    .heart {
      width: 20px;
      top: 12px;
      right: 16px;
    }
  }
`;
