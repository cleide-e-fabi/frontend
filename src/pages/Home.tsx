import { Header } from "../components/Header.styles";
import { StyledHome } from "../components/Home.styles";
import { HomeContent } from "../components/HomeContent.styles";
import { Mosaico } from "../components/Mosaico.styles";
import { Footer } from "../components/Footer.styles";
import { FooterElement } from "../components/FooterElement.styles";
import mosaico from "../assets/imgs/mosaico.png";
import truck from "../assets/svgs/truck.svg";
import securite from "../assets/svgs/securite.svg";
import edit from "../assets/svgs/edit.svg";
import star from "../assets/svgs/star.svg";
import theme from "../styles/theme";

export default function Home() {
  return (
    <StyledHome>
      <Header></Header>
      <Mosaico src={mosaico} />
      <HomeContent>
        <p>PRESENTEIE ALGUÉM ESPECIAL PARA VOCÊ!</p>
        <sub>
          Confira em nossa loja, monte sua cesta personalizada para presentear
          aquela pessoa amada.
        </sub>
        <span>
          <button>CONFERIR</button>
        </span>
      </HomeContent>
      <Footer>
        <FooterElement>
          <img src={truck}></img>
          <h1 style={{ color: `${theme.colors.primary}` }}>
            ENTREGAMOS EM <br /> TODO BRASIL
          </h1>
        </FooterElement>
        <FooterElement>
          <img src={securite}></img>
          <h1 style={{ color: `${theme.colors.primary}` }}>PAGAMENTO SEGURO</h1>
        </FooterElement>
        <FooterElement>
          <img src={edit}></img>
          <h1 style={{ color: `${theme.colors.secondary}` }}>
            PEDIDO PERSONALIZADO
          </h1>
        </FooterElement>
        <FooterElement>
          <img src={star}></img>
          <h1 style={{ color: `${theme.colors.secondary}` }}>
            SELO DE QUALIDADE
          </h1>
        </FooterElement>
      </Footer>
    </StyledHome>
  );
}
