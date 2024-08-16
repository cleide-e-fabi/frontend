import { BsBoxSeam } from 'react-icons/bs';
import { MdOutlineRemoveShoppingCart } from 'react-icons/md';
import { IoIosChatboxes } from 'react-icons/io';
import { MdOutlinePhonelinkLock } from 'react-icons/md';
import { ShopInfoStyles } from './ShopInfoStyles.styles';

export default function ShopInfo() {
  return (
    <>
      <ShopInfoStyles>
        <li className="info">
          <span className="info-icon">
            <BsBoxSeam />
          </span>
          <div className="info-text">
            <p className="info-title">Entrega Confiável</p>
            <h6>Envio rápido com código de rastreio via Correios.</h6>
          </div>
        </li>
        <li className="info">
          <span className="info-icon-2">
            <MdOutlineRemoveShoppingCart />
          </span>
          <div className="info-text">
            <p className="info-title">Satisfação ou Reembolso</p>
            <h6>
              Caso você não fique satisfeito nós devolvemos o seu dinheiro em
              até 7 dias.
            </h6>
          </div>
        </li>
        <li className="info">
          <span className="info-icon-2">
            <IoIosChatboxes />
          </span>
          <div className="info-text">
            <p className="info-title">Suporte Profissional</p>
            <h6>
              Equipe de suporte de extrema qualidade para te atender todos os
              dias da semana.
            </h6>
          </div>
        </li>
        <li className="info">
          <span className="info-icon">
            <MdOutlinePhonelinkLock />
          </span>
          <div className="info-text">
            <p className="info-title">Compra Segura</p>
            <h6>Aceitamos Cartão de Crédito e Boleto Bancário.</h6>
          </div>
        </li>
      </ShopInfoStyles>
    </>
  );
}
