import { HeaderStyles } from './Header.styles';
import { Link } from 'react-router-dom';
import * as svgs from '../../../assets/svgs';
import { GoTriangleDown } from 'react-icons/go';
import { HiShoppingCart } from 'react-icons/hi';
import { useContext, useState } from 'react';
import UserContext from '../../../contexts/UserContext';
import { MdOutlineShoppingCart } from "react-icons/md";

export default function Header({ showAdded }: any) {
  const [openMobile, setOpenMobile] = useState<string>('close-side-div');
  const [line, setLine] = useState<string>('line-close');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { cartProducts } = useContext(UserContext) as any;

  const openMobileOptions = () => {
    if (isOpen) {
      setIsOpen(false);
      setOpenMobile('close-side-div');
      setLine('line-close');
    } else {
      setIsOpen(true);
      setOpenMobile('open-side-div');
      setLine('line-open');
    }
  };

  return (
    <>
      <HeaderStyles>
        <img className="header-logo" src={svgs.logo} />
        <div className="header-options">
          <Link className="route-option" to="/">
            INÍCIO
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
            <MdOutlineShoppingCart />
            <div className='cart-quantity'>{cartProducts.length}</div>
          </Link>
          {showAdded ? (
            <div className={`added ${showAdded}`}>
              Produto adicionado ao carrinho!
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className={`header-mobile`}>
          <Link className="header-logo-mobile" to="/">
            <img src={svgs.logo} />
          </Link>
          <div className="open-options" onClick={openMobileOptions}>
            <div className={`${line}-1`}></div>
            <div className={`${line}-2`}></div>
            <div className={`${line}-3`}></div>
          </div>
          <Link className="mobile-icon-option" to="/carrinho">
            <HiShoppingCart />
            <div className='m-cart-quantity'>{cartProducts.length}</div>
          </Link>
          <div className={`${openMobile} header-mobile-options`}>
            <Link
              className="mobile-route-option"
              to="/"
              onClick={() => {
                setOpenMobile('close-side-div');
                setLine('line-close');
              }}
            >
              INÍCIO
            </Link>
            <Link
              className="mobile-route-option"
              to="/produtos"
              onClick={() => {
                setOpenMobile('close-side-div');
                setLine('line-close');
              }}
            >
              PRODUTOS
            </Link>
            <Link
              className="mobile-route-option"
              to="/sobre"
              onClick={() => {
                setOpenMobile('close-side-div');
                setLine('line-close');
              }}
            >
              SOBRE NÓS
            </Link>
            <Link
              className="mobile-route-option"
              to="/contato"
              onClick={() => {
                setOpenMobile('close-side-div');
                setLine('line-close');
              }}
            >
              CONTATOS
            </Link>
            <Link
              className="mobile-route-option"
              to="/troca"
              onClick={() => {
                setOpenMobile('close-side-div');
                setLine('line-close');
              }}
            >
              TROCA E DEVOLUÇÕES
            </Link>
            <Link
              className="mobile-route-option"
              to="/termos"
              onClick={() => {
                setOpenMobile('close-side-div');
                setLine('line-close');
              }}
            >
              TERMOS DE USO
            </Link>
            <img className="bottom-logo" src={svgs.logo} />
          </div>
        </div>
      </HeaderStyles>
    </>
  );
}
