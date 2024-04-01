import { Link } from "react-router-dom";
import { Header } from "../components/HomeStyles/Header.styles";
import { StyledHome } from "../components/HomeStyles/Home.styles";
import { HomeContent } from "../components/HomeStyles/HomeContent.styles";
import { Mosaico } from "../components/HomeStyles/Mosaico.styles";
import { Footer } from "../components/HomeStyles/Footer.styles";
import { FooterElement } from "../components/HomeStyles/FooterElement.styles";
import { SubHome } from "../components/HomeStyles/SubHome.styles";
import { CommentsSection } from "../components/HomeStyles/CommentsSection";
import desejo from "../assets/svgs/desejo.svg";
import comparar from "../assets/svgs/comparar.svg";
import carrinho from "../assets/svgs/carrinho.svg";
import mosaico from "../assets/imgs/mosaico.png";
import truck from "../assets/svgs/truck.svg";
import securite from "../assets/svgs/securite.svg";
import edit from "../assets/svgs/edit.svg";
import star from "../assets/svgs/star.svg";
import logo from "../assets/svgs/logo.svg";
import entrega from "../assets/svgs/entrega.svg";
import cesta1 from "../assets/imgs/cesta1.png";
import cesta2 from "../assets/imgs/cesta2.png";
import flowers from "../assets/imgs/flowers.png";
import ursos from "../assets/imgs/ursos.png";
import boxes from "../assets/imgs/boxes.png";
import caneca from "../assets/imgs/caneca.png";
import wave from "../assets/svgs/wave.svg";
import add from "../assets/svgs/add.svg";
import { GoTriangleDown } from "react-icons/go";
import theme from "../styles/theme";

export default function Home() {
  return (
    <>
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
          <Mosaico src={mosaico} />
        </div>
        <Footer>
          <FooterElement>
            <img src={truck}></img>
            <h1 style={{ color: `${theme.colors.primary}` }}>
              {"ENTREGAMOS EM"} <br />
              {"TODO BRASIL"}
            </h1>
          </FooterElement>
          <FooterElement>
            <img src={securite}></img>
            <h1 style={{ color: `${theme.colors.primary}` }}>
              {"PAGAMENTO SEGURO"}
            </h1>
          </FooterElement>
          <FooterElement>
            <img src={edit}></img>
            <h1 style={{ color: `${theme.colors.secondary}` }}>
              {"PEDIDO PERSONALIZADO"}
            </h1>
          </FooterElement>
          <FooterElement>
            <img src={star}></img>
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
              <img className="cep-img" src={entrega} />
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
              style={{ backgroundImage: `url(${cesta1})` }}
              className="category-img"
            ></div>
            <p className="category-title">CESTAS</p>
          </li>
          <li className="category">
            <div
              style={{ backgroundImage: `url(${ursos})` }}
              className="category-img"
            ></div>
            <p className="category-title">PELÚCIAS</p>
          </li>
          <li className="category">
            <div
              style={{ backgroundImage: `url(${cesta2})` }}
              className="category-img"
            ></div>
            <p className="category-title">LEMBRANCINHAS</p>
          </li>
          <li className="category">
            <div
              style={{ backgroundImage: `url(${flowers})` }}
              className="category-img"
            ></div>
            <p className="category-title">BUQUÊS</p>
          </li>
        </ul>
        <h6 className="favorites-title">OS FAVORITOS</h6>
        <span className="sub-line"></span>
        <ul className="favorites-list">
          <li className="favorites-item">
            <img src={add} className="add-item" />
            <img src={caneca} />
            <p>CANECA PERSONALIZADA</p>
            <h1>R$45,00</h1>
          </li>
          <li className="favorites-item">
            <img src={add} className="add-item" />
            <img src={caneca} />
            <p>CANECA PERSONALIZADA</p>
            <h1>R$45,00</h1>
          </li>
          <li className="favorites-item">
            <img src={add} className="add-item" />
            <img src={caneca} />
            <p>CANECA PERSONALIZADA</p>
            <h1>R$45,00</h1>
          </li>
          <div className="custom-container">
            <p className="custom-text">
              {`Personalize `} <br /> {`seu presente aqui`}
            </p>
            <img className="custom-img" src={boxes} />
          </div>
        </ul>
      </SubHome>
      <CommentsSection>
        <img className="wave" src={wave} />
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
    </>
  );
}
