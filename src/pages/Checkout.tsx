import { CheckoutContainer } from "../components/Checkout/CheckoutContainer";
import Header from "../components/Home/Header/Header";
import SimpleFooter from "../components/SimpleFooter/SimpleFooter";
import { Title } from "../components/Title";
import { useState, useContext, useEffect } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import UserContext from "../contexts/UserContext";
import { TbShoppingBagExclamation } from "react-icons/tb";
import axios from "axios";
import loading from "../assets/anim/loading.webp";

export default function Checkout() {

    const { cartProducts } = useContext(UserContext) as any;
    const [cartLS, setCartLS] = useState<any[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [discount, setDiscount] = useState<number>(0);
    const [cartToken, setCartToken] = useState<string>("");
    const [itens, setItens] = useState<any[]>([]);
    const [checkoutLink, setCheckoutLink] = useState<string>("");

    useEffect(() => {
        setCartLS(JSON.parse(localStorage.getItem('cartProducts') as any));

        let newTotalPrice: number = 0.00;
        let newDiscount: number = 0.00;
        let line_items: any = [];

        cartProducts.forEach((product: any) => {
            let diff = product.compare_at_price - product.price;
            newTotalPrice += product.price * product.amount;
            newDiscount += diff * product.amount;
            line_items.push({
                "variant_id": product.variant_id,
                "quantity": product.amount
            });
        });

        setTotalPrice(newTotalPrice);
        setDiscount(newDiscount);
        setItens(line_items);

        const promise = axios.post("https://gifts-back.onrender.com/cart", { line_items })
        promise.then(answer => { (setCartToken(answer.data.cart.token)) })
    }, [cartProducts]);

    console.log("cartTpeke", cartToken);

    useEffect(() => {
        if (cartToken) {

            const bodyForm = {
                "cart_token": cartToken,
                "line_items": itens
            };

            console.log("body checktfds", bodyForm);

            const promise = axios.post("https://gifts-back.onrender.com/order", { body: bodyForm })
            promise.then(answer => { (setCheckoutLink(answer.data.order.checkout_link)) })
        }
    }, [cartToken]);

    console.log("xheckout data", checkoutLink);

    return (
        <><CheckoutContainer>
            <Header />
            <Title>
                <p>RESUMO DA COMPRA</p>
                <span className="line"></span>
            </Title>
            <form className="checkout-form">
                <div className="checkout-products">
                    {(cartLS.length !== 0) ?
                        <>
                            <ul className="checkout-list">
                                {cartProducts.map((product: any) => (
                                    <li key={product.id}>
                                        <h1>{product.title}</h1>
                                    </li>
                                ))}
                            </ul>
                            {checkoutLink ? <a href={checkoutLink}>Finalizar compra</a> :
                                <img src={loading}></img>
                            }

                        </>
                        :
                        <div className="empty-checkout">
                            <TbShoppingBagExclamation />
                        </div>
                    }
                </div>
            </form>
        </CheckoutContainer>
            <SimpleFooter />
        </>
    );
}
