import { StyledHome } from '../components/Home/Home.styles';
import { HomeContent } from '../components/Home/HomeContent.styles';
import { Mosaico } from '../components/Home/Mosaico.styles';
import { Footer } from '../components/Home/Footer.styles';
import { FooterElement } from '../components/Home/FooterElement.styles';
import { SubHome } from '../components/Home/SubHome.styles';
import { MainFooter } from '../components/Home/MainFooter.styles';
import { Title } from '../components/Title';
import * as imgs from '../assets/imgs';
import * as svgs from '../assets/svgs';
import theme from '../styles/theme';
import Header from '../components/Home/Header/Header';
import CommentsSection from '../components/Home/CommentsSection/CommentsSection';
import { useContext, useState } from 'react';
import UserContext from '../contexts/UserContext';
import { Link } from 'react-router-dom';
import axios from 'axios';
import loading from '../assets/anim/loading.webp';
import { addDays, format } from 'date-fns';

export default function Home() {
  const { products } = useContext(UserContext) as any;
  const [invalidCep, setInvalidCep] = useState<boolean>(false);
  const [validCep, setValidCep] = useState<boolean>(false);
  const [showLoading, setShowLoading] = useState<boolean>(false);
  const [cep, setCep] = useState('');
  const today = new Date();
  const date15 = addDays(today, 10);
  const date30 = addDays(today, 20);
  const formattedDate15 = format(date15, 'dd/MM');
  const formattedDate30 = format(date30, 'dd/MM');

  const verifyCep = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowLoading(true);

    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

      const hasCep = 'cep' in response.data;

      if (hasCep) {
        setInvalidCep(false);
        setValidCep(true);
        setShowLoading(false);
      } else {
        setInvalidCep(true);
        setValidCep(false);
        setShowLoading(false);
      }
    } catch (error) {
      setInvalidCep(true);
      setValidCep(false);
      setShowLoading(false);
    }
  };

  return (
    <>
      <StyledHome>
        <Header />
        <div className="middle-content">
          <HomeContent>
            <p>{`PRESENTEIE ALGUÉM ESPECIAL PARA VOCÊ!`}</p>
            <sub>
              {`Confira em nossa loja, monte sua cesta personalizada para
              presentear aquela pessoa amada.`}
            </sub>
            <span>
              <Link
                className="conferir-products"
                to="/produtos"
              >{`CONFERIR`}</Link>
            </span>
          </HomeContent>
          <Mosaico src={imgs.mosaico} />
        </div>
        <Footer>
          <FooterElement>
            <img src={svgs.truck}></img>
            <h1 style={{ color: `${theme.colors.primary}` }}>
              {'ENTREGAMOS EM'} <br />
              {'TODO BRASIL'}
            </h1>
          </FooterElement>
          <FooterElement>
            <img src={svgs.securite}></img>
            <h1 style={{ color: `${theme.colors.primary}` }}>
              {'PAGAMENTO SEGURO'}
            </h1>
          </FooterElement>
          <FooterElement>
            <img src={svgs.edit}></img>
            <h1 style={{ color: `${theme.colors.secondary}` }}>
              {'PEDIDO PERSONALIZADO'}
            </h1>
          </FooterElement>
          <FooterElement>
            <img src={svgs.star}></img>
            <h1 style={{ color: `${theme.colors.secondary}` }}>
              {'SELO DE QUALIDADE'}
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
                <form className="cep-form" onSubmit={verifyCep}>
                  <input
                    onSubmit={verifyCep}
                    type="number"
                    name="cep"
                    placeholder="Digite seu CEP"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    maxLength={8}
                    required
                  ></input>
                  <button type="submit">
                    {`Buscar`}
                    {showLoading ? (
                      <img
                        className="loading-gif"
                        src={loading}
                        alt="loading..."
                      />
                    ) : (
                      <></>
                    )}
                  </button>
                </form>
                <a
                  href="https://buscacepinter.correios.com.br/app/endereco/index.php"
                  target="blank"
                  className="cep-link"
                >
                  {`Não sei o CEP`}
                </a>
                {invalidCep && (
                  <p className="invalide-cep">
                    Por favor, digite um CEP válido.
                  </p>
                )}
                {validCep && (
                  <p className="free-ship-container">
                    {`Entrega estimada entre os dias ${formattedDate15} e ${formattedDate30}`}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <ul className="categories">
          <Link to="cestas" className="category">
            <div
              style={{ backgroundImage: `url(${imgs.cesta1})` }}
              className="category-img"
            ></div>
            <p className="category-title">CESTAS</p>
          </Link>
          <Link to="pelucias" className="category">
            <div
              style={{ backgroundImage: `url(${imgs.ursos})` }}
              className="category-img"
            ></div>
            <p className="category-title">PELÚCIAS</p>
          </Link>
          <Link to="lembrancinhas" className="category">
            <div
              style={{ backgroundImage: `url(${imgs.cesta2})` }}
              className="category-img"
            ></div>
            <p className="category-title">LEMBRANCINHAS</p>
          </Link>
          <Link to="buques" className="category">
            <div
              style={{ backgroundImage: `url(${imgs.flowers})` }}
              className="category-img"
            ></div>
            <p className="category-title">BUQUÊS</p>
          </Link>
        </ul>
        <Title>
          <p>FAVORITOS</p>
          <span className="line"></span>
        </Title>
        <ul className="favorites-list">
          {products.slice(2, 6).map((i: any) => (
            <Link to={`/produtos`} key={i.id} className="favorites-item">
              <img src={i.url_image[0]} />
              <p>{i.title}</p>
              <h1>{i.price}</h1>
            </Link>
          ))}
        </ul>
      </SubHome>
      <CommentsSection />
      <MainFooter>
        <img className="footer-logo" src={svgs.logov} />
        <h5 className="footer-info">{`Cleide e Fabi | CNPJ: 13.895.943/0001-71`}</h5>
        <h5 className="footer-info">{`Porto Velho 597 - Jd Cumbica Guarulhos - São Paulo - SP - 07.240-060`}</h5>
        <h5 className="footer-info">{`cleidefabi.com.br | Whatsapp: (11) 94729-2964`}</h5>
        <a href="https://wa.me/5511947292964?text=" target="_blank">
          <img className="footer-wpp" src={svgs.wpp} />
        </a>
        <img className="footer-wppline" src={svgs.wppline} />
        <a
          href="https://www.instagram.com/cleidefabipresentes/"
          target="_blank"
        >
          <img className="footer-instagram" src={svgs.instagram} />
        </a>
      </MainFooter>
    </>
  );
}
