import { useContext } from "react";
import { CartContainer } from "../components/Cart/CartContainer.styles";
import Header from "../components/Home/Header/Header";
import { Title } from "../components/Title";
import UserContext from "../contexts/UserContext";
import { TbShoppingCartExclamation } from "react-icons/tb";
import { Link } from "react-router-dom";
import ShopInfo from "../components/ShopInfo/ShopInfo";
import SimpleFooter from "../components/SimpleFooter/SimpleFooter";

export default function Cart() {

    const { cartProducts } = useContext(UserContext) as any;
    const { products } = useContext(UserContext) as any;

    console.log('borav', cartProducts, !cartProducts);

    return (
        <>
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
                            <div className="cart-header">
                                <h5 className="cart-quantitie-text">Quantidade</h5>
                                <h6 className="cart-total-text">Total:</h6>
                            </div>
                            {products.map((i: any) =>
                                <li className="cart-li">
                                    <div className="cart-product-info">
                                        <img className="cart-product-img" src={i.url_image[0]}></img>
                                        <div className="cart-product-values">
                                            <h1 className="cart-product-title">{i.title}</h1>
                                            <h2 className="cart-product-price">{`R$ ${i.price}`} <span>{`R$ ${i.compare_at_price}`}</span></h2>
                                        </div>
                                    </div>
                                    <div className="cart-product-quantities">
                                        <div className="cart-product-amount">
                                            <div className="amount-minus">-</div>
                                            <div className="quantity-value">7</div>
                                            <div className="amount-plus">+</div>
                                        </div>
                                        <div className="amount-price">R$ 999.99</div>
                                    </div>
                                </li>
                            )}
                        </ul>
                        <div className="cart-products-buy">
                            <p className="total-price">Total: <span>R$ 99.99</span></p>
                            <h5 className="total-economy">Você economizou R$99.99!</h5>
                            <h6 className="ship-info">Todas as entregas possuem código de rastreio ❤</h6>
                            <button className="finalize-purchase">FINALIZAR COMPRA</button>
                            <button className="keep-buying">CONTINUAR COMPRANDO</button>
                        </div>
                    </div>
                }
            </CartContainer>
            <ShopInfo />
            <SimpleFooter />
        </>
    );
}