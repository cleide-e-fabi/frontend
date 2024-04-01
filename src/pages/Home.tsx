import { Link } from "react-router-dom";
import { Header } from "../components/HomeStyles/Header.styles";
import { StyledHome } from "../components/HomeStyles/Home.styles";
import { HomeContent } from "../components/HomeStyles/HomeContent.styles";
import { Mosaico } from "../components/HomeStyles/Mosaico.styles";
import { Footer } from "../components/HomeStyles/Footer.styles";
import { FooterElement } from "../components/HomeStyles/FooterElement.styles";
import { SubHome } from "../components/HomeStyles/SubHome.styles";
import { CommentsSection } from "../components/HomeStyles/CommentsSection";
import { MainFooter } from "../components/HomeStyles/MainFooter.styles";
import { GoTriangleDown } from "react-icons/go";
import * as imgs from "../assets/imgs";
import * as svgs from "../assets/svgs";
import theme from "../styles/theme";

export default function Home() {
  return (
    <>
      <StyledHome>
        <Header>
          <img className="header-logo" src={svgs.logo} />
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
              <img src={svgs.desejo} />
            </Link>
            <Link className="icon-option" to="/">
              <img src={svgs.comparar} />
            </Link>
            <Link className="icon-option" to="/carrinho">
              <img src={svgs.carrinho} />
            </Link>
          </div>
        </Header>
        <div className="middle-content">
          <HomeContent>
            <p>{`PRESENTEIE ALGUÉM ESPECIAL PARA VOCÊ!`}</p>
            <sub>
              {`Confira em nossa loja, monte sua cesta personalizada para
              presentear aquela pessoa amada.`}
            </sub>
            <span>
              <button>{`CONFERIR`}</button>
            </span>
          </HomeContent>
          <Mosaico src={imgs.mosaico} />
        </div>
        <Footer>
          <FooterElement>
            <img src={svgs.truck}></img>
            <h1 style={{ color: `${theme.colors.primary}` }}>
              {"ENTREGAMOS EM"} <br />
              {"TODO BRASIL"}
            </h1>
          </FooterElement>
          <FooterElement>
            <img src={svgs.securite}></img>
            <h1 style={{ color: `${theme.colors.primary}` }}>
              {"PAGAMENTO SEGURO"}
            </h1>
          </FooterElement>
          <FooterElement>
            <img src={svgs.edit}></img>
            <h1 style={{ color: `${theme.colors.secondary}` }}>
              {"PEDIDO PERSONALIZADO"}
            </h1>
          </FooterElement>
          <FooterElement>
            <img src={svgs.star}></img>
            <h1 style={{ color: `${theme.colors.secondary}` }}>
              {"SELO DE QUALIDADE"}
            </h1>
          </FooterElement>
        </Footer>
      </StyledHome>
      <SubHome>
        <div className="banner">
          <div className="cep-container">
            <div className="cep-content">
              <img className="cep-img" src={svgs.entrega} />
              <div className="cep-search">
                <p className="cep-title">{`1. CEP de Entrega:`}</p>
                <form className="cep-form">
                  <input
                    type="number"
                    name="cep"
                    placeholder="00000-000"
                    required
                  ></input>
                  <button>{`Buscar`}</button>
                </form>
                <a
                  href="https://buscacepinter.correios.com.br/app/endereco/index.php"
                  target="blank"
                  className="cep-link"
                >
                  {`Não sei o CEP`}
                </a>
              </div>
            </div>
          </div>
        </div>
        <ul className="categories">
          <li className="category">
            <div
              style={{ backgroundImage: `url(${imgs.cesta1})` }}
              className="category-img"
            ></div>
            <p className="category-title">CESTAS</p>
          </li>
          <li className="category">
            <div
              style={{ backgroundImage: `url(${imgs.ursos})` }}
              className="category-img"
            ></div>
            <p className="category-title">PELÚCIAS</p>
          </li>
          <li className="category">
            <div
              style={{ backgroundImage: `url(${imgs.cesta2})` }}
              className="category-img"
            ></div>
            <p className="category-title">LEMBRANCINHAS</p>
          </li>
          <li className="category">
            <div
              style={{ backgroundImage: `url(${imgs.flowers})` }}
              className="category-img"
            ></div>
            <p className="category-title">BUQUÊS</p>
          </li>
        </ul>
        <h6 className="favorites-title">OS FAVORITOS</h6>
        <span className="sub-line"></span>
        <ul className="favorites-list">
          <li className="favorites-item">
            <img src={svgs.add} className="add-item" />
            <img src={imgs.caneca} />
            <p>CANECA PERSONALIZADA</p>
            <h1>R$45,00</h1>
          </li>
          <li className="favorites-item">
            <img src={svgs.add} className="add-item" />
            <img src={imgs.caneca} />
            <p>CANECA PERSONALIZADA</p>
            <h1>R$45,00</h1>
          </li>
          <li className="favorites-item">
            <img src={svgs.add} className="add-item" />
            <img src={imgs.caneca} />
            <p>CANECA PERSONALIZADA</p>
            <h1>R$45,00</h1>
          </li>
          <div className="custom-container">
            <p className="custom-text">
              {`Personalize `} <br /> {`seu presente aqui`}
            </p>
            <img className="custom-img" src={imgs.boxes} />
          </div>
        </ul>
      </SubHome>
      <CommentsSection>
        <img className="wave" src={svgs.wave} />
        <p className="comment-title">
          {"Deixe seu comentário"} <br />
          <strong>{"A Cleide e Fabi quer saber!"}</strong>
        </p>
        <ul className="comment-cards">
          <li className="comment-card">
            <ul className="comment-stars">
              <li className="star">{`★`}</li>
              <li className="star">{`★`}</li>
              <li className="star">{`★`}</li>
              <li className="star">{`★`}</li>
              <li className="star">{`★`}</li>
            </ul>
            <h6 className="product-name">{`Nome do produto`}</h6>
            <h5 className="comment-text">{`Deu tudo certo. Vcs são maravilhosas!`}</h5>
            <div className="comment-date">{`03/02/24`}</div>
          </li>
          <li className="comment-card">
            <ul className="comment-stars">
              <li className="star">{`★`}</li>
              <li className="star">{`★`}</li>
              <li className="star">{`★`}</li>
              <li className="star">{`★`}</li>
            </ul>
            <h6 className="product-name">{`Nome do produto`}</h6>
            <h5 className="comment-text">{`Deu tudo certo. Vcs são maravilhosas!`}</h5>
            <div className="comment-date">{`03/02/24`}</div>
          </li>
          <li className="comment-card">
            <ul className="comment-stars">
              <li className="star">{`★`}</li>
              <li className="star">{`★`}</li>
              <li className="star">{`★`}</li>
            </ul>
            <h6 className="product-name">{`Nome do produto`}</h6>
            <h5 className="comment-text">{`Deu tudo certo. Vcs são maravilhosas!`}</h5>
            <div className="comment-date">{`03/02/24`}</div>
          </li>
        </ul>
      </CommentsSection>
      <MainFooter>
        <img className="footer-logo" src={svgs.logov} />
        <h5 className="footer-info">{`Cleide e Fabi | CNPJ: 13.895.943/0001-71`}</h5>
        <h5 className="footer-info">{`Porto Velho 597 - Jd Cumbica Guarulhos - São Paulo - SP - 07.240-060`}</h5>
        <h5 className="footer-info">{`cleidefabi.com.br | Whatsapp: (11) 94729-2964`}</h5>
        <img className="footer-wpp" src={svgs.wpp} />
        <img className="footer-wppline" src={svgs.wppline} />
        <img className="footer-instagram" src={svgs.instagram} />
      </MainFooter>
    </>
  );
}
