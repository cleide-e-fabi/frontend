import { useContext, useEffect, useState } from "react";
import { CartContainer } from "../components/Cart/CartContainer.styles";
import Header from "../components/Home/Header/Header";
import { Title } from "../components/Title";
import UserContext from "../contexts/UserContext";
import { TbShoppingCartExclamation } from "react-icons/tb";
import { Link } from "react-router-dom";
import ShopInfo from "../components/ShopInfo/ShopInfo";
import SimpleFooter from "../components/SimpleFooter/SimpleFooter";

export default function Cart() {

    const { cartProducts, setCartProducts } = useContext(UserContext) as any;
    const [cartLS, setCartLS] = useState<any[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [discount, setDiscount] = useState<number>(0);

    useEffect(() => {
        setCartLS(JSON.parse(localStorage.getItem('cartProducts') as any));

        let newTotalPrice = 0.00;
        let newDiscount = 0.00;

        cartProducts.forEach((product: any) => {
            let diff = product.compare_at_price - product.price;
            newTotalPrice += product.price * product.amount;
            newDiscount += diff * product.amount;
        });

        setTotalPrice(newTotalPrice);
        setDiscount(newDiscount);

    }, [cartProducts]);

    const handleAmountChange = (productId: number, amountChange: number) => {
        const updatedCartProducts = cartProducts.map((product: any) => {
            if (product.id === productId) {
                const newAmount = product.amount + amountChange;

                if (newAmount <= 0) {
                    return null;
                }

                return {
                    ...product,
                    amount: newAmount
                };
            }
            return product;
        }).filter((product: any) => product !== null);

        setCartProducts(updatedCartProducts);

        localStorage.setItem('cartProducts', JSON.stringify(updatedCartProducts));
    };

    return (
        <>
            <CartContainer>
                <Header />
                <Title>
                    <p>MEU CARRINHO</p>
                    <span className="line"></span>
                </Title>
                {(cartLS.length !== 0) ?
                    <div className="cart-products-container">
                        <ul className="cart-ul">
                            <div className="cart-header">
                                <h5 className="cart-quantitie-text">Quantidade</h5>
                                <h6 className="cart-total-text">Total:</h6>
                            </div>
                            {cartProducts.map((product: any) => (
                                <li key={product.id} className="cart-li">
                                    <div className="cart-product-info">
                                        <img className="cart-product-img" src={product.url_image[0]} alt={product.title} />
                                        <div className="cart-product-values">
                                            <h1 className="cart-product-title">{product.title}</h1>
                                            <h2 className="cart-product-price">{`R$ ${product.price}`} <span>{`R$ ${product.compare_at_price}`}</span></h2>
                                        </div>
                                    </div>
                                    <div className="cart-product-quantities">
                                        <div className="cart-product-amount">
                                            <div className="amount-minus" onClick={() => handleAmountChange(product.id, -1)}>-</div>
                                            <div className="quantity-value">{product.amount}</div>
                                            <div className="amount-plus" onClick={() => handleAmountChange(product.id, 1)}>+</div>
                                        </div>
                                        <div className="amount-price">{`R$ ${(product.price * product.amount).toFixed(2)}`}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="cart-products-buy">
                            <p className="total-price">Total: <span>{`R$ ${totalPrice.toFixed(2)}`}</span></p>
                            <h5 className="total-economy">{`Você economizou R$ ${discount.toFixed(2)}`}</h5>
                            <h6 className="ship-info">Todas as entregas possuem código de rastreio ❤</h6>
                            <Link to="/checkout" className="finalize-purchase">FINALIZAR COMPRA</Link>
                            <Link to="/produtos" className="keep-buying">CONTINUAR COMPRANDO</Link>
                        </div>
                    </div>
                    :

                    <div className="cart-empty">
                        <TbShoppingCartExclamation className="empty-icon" />
                        <p className="empty-warning">Seu carrinho está vazio</p>
                        <Link to="/produtos" className="empty-button">VEJA NOSSOS PRODUTOS</Link>
                    </div>
                }
            </CartContainer>
            <ShopInfo />
            <SimpleFooter />
        </>
    );
}