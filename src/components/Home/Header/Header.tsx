import { HeaderStyles } from './Header.styles';
import { Link } from 'react-router-dom';
import * as svgs from '../../../assets/svgs';
import { GoTriangleDown } from 'react-icons/go';

export default function Header({ showAdded }: any) {
  return (
    <>
      <HeaderStyles>
        <img className="header-logo" src={svgs.logo} />
        <div className="header-options">
          <Link className="route-option" to="/">
            HOME
          </Link>
          <Link className="route-option" to="/produtos">
            PRODUTOS
          </Link>
          <Link className="route-option" to="/sobre">
            SOBRE NÓS
          </Link>
          <Link className="route-option" to="/contato">
            CONTATOS
          </Link>
          <div className={'route-option header-products'}>
            INFORMAÇÕES
            <GoTriangleDown className="header-triangle" />
            <div className={'products-options'}>
              <Link className="product-option" to="/troca">
                TROCA E DEVOLUÇÕES
              </Link>
              <Link className="product-option" to="/termos">
                TERMOS DE USO
              </Link>
            </div>
          </div>
        </div>
        <div className="header-icons">
          <Link className="icon-option" to="/carrinho">
            <img src={svgs.carrinho} />
          </Link>
          {showAdded ? (
            <div className={`added ${showAdded}`}>
              Produto adicionado ao carrinho!
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="header-mobile">
          <img className="header-logo-mobile" src={svgs.logo} />
          <div className="open-options">
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
          </div>
        </div>
      </HeaderStyles>
    </>
  );
}
