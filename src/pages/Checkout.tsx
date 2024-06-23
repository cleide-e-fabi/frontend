import { CheckoutContainer } from '../components/Checkout/CheckoutContainer';
import Header from '../components/Home/Header/Header';
import SimpleFooter from '../components/SimpleFooter/SimpleFooter';
import { Title } from '../components/Title';
import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import UserContext from '../contexts/UserContext';
import { TbShoppingBagExclamation } from 'react-icons/tb';
import axios from 'axios';
import loading from '../assets/anim/loading.webp';

export default function Checkout() {
  const { cartProducts } = useContext(UserContext) as any;
  const [cartLS, setCartLS] = useState<any[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [cartToken, setCartToken] = useState<string>('');
  const [itens, setItens] = useState<any[]>([]);

  useEffect(() => {
    setCartLS(JSON.parse(localStorage.getItem('cartProducts') as any));

    let newTotalPrice: number = 0.0;
    let newDiscount: number = 0.0;
    let line_items: any = [];

    cartProducts.forEach((product: any) => {
      let diff = product.compare_at_price - product.price;
      newTotalPrice += product.price * product.amount;
      newDiscount += diff * product.amount;
      line_items.push({
        variant_id: product.variant_id,
        quantity: product.amount,
      });
    });

    setTotalPrice(newTotalPrice);
    setDiscount(newDiscount);
    setItens(line_items);

    const promise = axios.post(
      'https://gifts-back.onrender.com/cart',
      line_items,
    );
    promise.then((answer) => {
      setCartToken(answer.data.cart.token);
    });
  }, [cartProducts]);

  useEffect(() => {
    document
      .querySelector('.confirme-container')
      ?.addEventListener('click', createOrder);
  }, [cartToken]);

  const createOrder = (event: any) => {
    event.stopPropagation();

    if (cartToken) {
      const bodyForm = {
        cart_token: cartToken,
        line_items: itens,
      };

      const promise = axios.post('https://gifts-back.onrender.com/order', {
        body: bodyForm,
      });
      promise.then((answer) => {
        window.location.href = answer.data.order.checkout_link;
      });
    }
  };

  return (
    <>
      <CheckoutContainer>
        <Header />
        <Title>
          <p>RESUMO DA COMPRA</p>
          <span className="line"></span>
        </Title>
        <div className="checkout-form">
          {cartLS.length !== 0 ? (
            <>
              <ul className="checkout-list">
                {cartProducts.map((product: any) => (
                  <li className="checkout-li" key={product.id}>
                    <img
                      className="product-img-check"
                      src={product.url_image[0]}
                    />
                    <div className="product-info-check">
                      <h1>{product.title}</h1>
                      <h2>
                        {`R$ ${product.price}`}
                        <span>{`R$ ${product.compare_at_price}`}</span>
                      </h2>
                      <h3>
                        {`Quantidade: `} <span>{product.amount}</span>
                      </h3>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="checkout-confirme">
                <p className="checktou-title">Resumo</p>
                <h1 className="checkout-total">
                  {'Total: '} <span>{totalPrice.toFixed(2)}</span>
                </h1>
                <h1 className="checkout-discount">
                  {'Desconto: '} <span>{discount.toFixed(2)}</span>
                </h1>
                {cartToken ? (
                  <div className="checkout-link">
                    <div className="checkout-loading confirme-container">
                      <p className="processing">Finalizar Compra</p>
                    </div>
                  </div>
                ) : (
                  <div className="checkout-link">
                    <div className="checkout-loading waiting-container">
                      <p className="processing">Processando Pedidos</p>
                      <img className="img-loading" src={loading}></img>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="empty-checkout">
              <TbShoppingBagExclamation />
              <h6>Sem Produtos</h6>
              <Link className="empty-checkout-button" to="/produtos">
                VER PRODUTOS
              </Link>
            </div>
          )}
        </div>
      </CheckoutContainer>
      <SimpleFooter />
    </>
  );
}