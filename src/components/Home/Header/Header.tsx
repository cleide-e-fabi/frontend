import { HeaderStyles } from "./Header.styles";
import { Link } from "react-router-dom";
import * as svgs from "../../../assets/svgs";
import { GoTriangleDown } from "react-icons/go";

export default function Header() {
    return (
        <>
        <HeaderStyles>
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
        </HeaderStyles>
        </>
    );
}