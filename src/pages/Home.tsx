import { Link } from "react-router-dom";
import { Header } from "../components/Header.styles";
import { StyledHome } from "../components/Home.styles";
import { HomeContent } from "../components/HomeContent.styles";
import { Mosaico } from "../components/Mosaico.styles";
import { Footer } from "../components/Footer.styles";
import { FooterElement } from "../components/FooterElement.styles";
import desejo from "../assets/svgs/desejo.svg";
import comparar from "../assets/svgs/comparar.svg";
import carrinho from "../assets/svgs/carrinho.svg";
import mosaico from "../assets/imgs/mosaico.png";
import truck from "../assets/svgs/truck.svg";
import securite from "../assets/svgs/securite.svg";
import edit from "../assets/svgs/edit.svg";
import star from "../assets/svgs/star.svg";
import logo from "../assets/svgs/logo.svg";
import { GoTriangleDown } from "react-icons/go";
import theme from "../styles/theme";

export default function Home() {
  return (
    <StyledHome>
      <Header>
        <img className="header-logo" src={logo} />
        <div className="header-options">
          <Link className="route-option" to="/">
            HOME
          </Link>
          <div className={"route-option header-products"}>
            PRODUTOS
            <GoTriangleDown className="header-triangle" />
            <div className={" products-options"}>
              <Link className="product-option" to="/mais-vendidos">
                MAIS VENDIDOS
              </Link>
              <Link className="product-option" to="/cestas">
                CESTAS FITS
              </Link>
              <Link className="product-option" to="/sem-gluten">
                SEM GLÚTEN
              </Link>
              <Link className="product-option" to="/sem-lactose">
                SEM LACTOSE
              </Link>
            </div>
          </div>
          <Link className="route-option" to="/sobre">
            SOBRE NÓS
          </Link>
          <Link className="route-option" to="/contatos">
            CONTATOS
          </Link>
        </div>
        <div className="header-icons">
          <Link className="header-register" to="/login">
            ENTRAR
          </Link>{" "}
          /
          <Link className="header-register" to="/register">
            REGISTRAR
          </Link>
          <Link className="icon-option" to="/">
            <img src={desejo} />
          </Link>
          <Link className="icon-option" to="/">
            <img src={comparar} />
          </Link>
          <Link className="icon-option" to="/carrinho">
            <img src={carrinho} />
          </Link>
        </div>
      </Header>
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
