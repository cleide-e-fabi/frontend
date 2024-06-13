import { useContext } from "react";
import { CartContainer } from "../components/Cart/CartContainer.styles";
import Header from "../components/Home/Header/Header";
import { Title } from "../components/Title";
import UserContext from "../contexts/UserContext";
import { TbShoppingCartExclamation } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function Cart() {

    const { cartProducts } = useContext(UserContext) as any;
    const { products } = useContext(UserContext) as any;

    console.log('borav', cartProducts, !cartProducts);

    return (
        <CartContainer>
            <Header />
            <Title>
                <p>MEU CARRINHO</p>
                <span className="line"></span>
            </Title>
            {!cartProducts ?
                <div className="cart-empty">
                    <TbShoppingCartExclamation className="empty-icon" />
                    <p className="empty-warning">Seu carrinho está vazio</p>
                    <Link to="/produtos" className="empty-button">VEJA NOSSOS PRODUTOS</Link>
                </div>
                :
                <div className="cart-products-container">
                    <ul className="cart-ul">
                        <h6 className="cart-price">Total:</h6>
                        {products.map((i: any) =>
                            <li className="cart-li">
                                <img className="cart-product-img" src={i.url_image[0]}></img>
                                <div className="cart-product-info">
                                    <h1>{i.title}</h1>
                                    <h2>R$ {i.price} <span>R$ {i.compare_at_price}</span></h2>
                                </div>
                            </li>
                        )}
                    </ul>
                    <div className="cart-products-buy">
                        pindamoiangaba
                    </div>
                </div>
            }
        </CartContainer>
    );
}