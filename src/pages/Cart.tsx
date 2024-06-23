import { useContext, useEffect, useState } from 'react';
import { CartContainer } from '../components/Cart/CartContainer.styles';
import Header from '../components/Home/Header/Header';
import { Title } from '../components/Title';
import UserContext from '../contexts/UserContext';
import { TbShoppingCartExclamation } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import ShopInfo from '../components/ShopInfo/ShopInfo';
import SimpleFooter from '../components/SimpleFooter/SimpleFooter';
import { MdDelete } from 'react-icons/md';
import loading from '../assets/anim/loading.webp';
import axios from 'axios';

export default function Cart() {
  const { cartProducts, setCartProducts } = useContext(UserContext) as any;
  const [cartLS, setCartLS] = useState<any[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [isconfirme, setIsconfirme] = useState<boolean>(false);
  const [cartToken, setCartToken] = useState<string>('');
  const [itens, setItens] = useState<any[]>([]);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  useEffect(() => {
    setCartLS(JSON.parse(localStorage.getItem('cartProducts') as any));

    let newTotalPrice = 0.0;
    let newDiscount = 0.0;

    cartProducts.forEach((product: any) => {
      let diff = product.compare_at_price - product.price;
      newTotalPrice += product.price * product.amount;
      newDiscount += diff * product.amount;
    });

    setTotalPrice(newTotalPrice);
  }, [cartProducts]);

  useEffect(() => {
    setCartLS(JSON.parse(localStorage.getItem('cartProducts') as any));
    setIsDisabled(true);

    let line_items: any = [];

    cartProducts.forEach((product: any) => {
      line_items.push({
        variant_id: product.variant_id,
        quantity: product.amount,
      });
    });

    setItens(line_items);

    const promise = axios.post(
      'https://gifts-back.onrender.com/cart',
      line_items,
    );
    promise.then((answer) => {
      setCartToken(answer.data.cart.token);
      setIsDisabled(false);
    });
  }, [cartProducts]);

  const createOrder = (event: any) => {
    event.stopPropagation();

    console.log('entrou aqqq na create');

    setIsconfirme(true);

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

  const handleAmountChange = (productId: number, amountChange: number) => {
    const updatedCartProducts = cartProducts
      .map((product: any) => {
        if (product.id === productId) {
          const newAmount = product.amount + amountChange;

          if (newAmount <= 0) {
            return null;
          }

          return {
            ...product,
            amount: newAmount,
          };
        }
        return product;
      })
      .filter((product: any) => product !== null);

    setCartProducts(updatedCartProducts);

    localStorage.setItem('cartProducts', JSON.stringify(updatedCartProducts));
  };

  const handleDeleteProduct = (productId: number) => {
    const updatedCartProducts = cartProducts.filter(
      (product: any) => product.id !== productId,
    );
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
        {cartLS.length !== 0 ? (
          <div className="cart-products-container">
            <ul className="cart-ul">
              {cartProducts.map((product: any) => (
                <li key={product.id} className="cart-li">
                  <div className="cart-product-info">
                    <img
                      className="cart-product-img"
                      src={product.url_image[0]}
                      alt={product.title}
                    />
                    <div className="cart-product-values">
                      <h2 className="cart-product-category">Categoria</h2>
                      <h1 className="cart-product-title">{product.title}</h1>
                    </div>
                  </div>
                  <div className="cart-product-quantities">
                    <div className="amount-compare_at_price">
                      R$ {product.compare_at_price}
                    </div>
                    <div className="amount-price">R$ {(product.price * product.amount).toFixed(2)}</div>
                    <div className="cart-product-delete">
                      <div
                        className="delete-icon"
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        <MdDelete />
                      </div>
                      <div className="cart-product-amount">
                        <div
                          className="amount-minus"
                          onClick={() => handleAmountChange(product.id, -1)}
                        >
                          -
                        </div>
                        <div className="quantity-value">{product.amount}</div>
                        <div
                          className="amount-plus"
                          onClick={() => handleAmountChange(product.id, 1)}
                        >
                          +
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-products-buy">
              <div className="cart-products-info">
                <p className="cart-title">Resumo</p>
                <ul className="cart-products-list">
                  {cartProducts.map((i: any) => (
                    <li key={i.id} className="cart-list-info">
                      <div className="list-info">
                        <h6>x{i.amount}</h6>
                        <h5>{i.title}</h5>
                      </div>
                      <h6>{`R$ ${(i.price * i.amount).toFixed(2)}`}</h6>
                    </li>
                  ))}
                </ul>
                <div className="cart-ship">
                  <h6>Frete</h6>
                  <h6>R$ 0.00</h6>
                </div>
                <p className="total-price">
                  Total: <span>{`R$ ${totalPrice.toFixed(2)}`}</span>
                </p>
                {!isDisabled ?
                  <div className="finalize-purchase" onClick={createOrder}>
                    FINALIZAR COMPRA
                  </div>
                  :
                  <div className="finalize-purchase">
                    ATUALIZANDO CARRINHO <span><img src={loading} /></span>
                  </div>
                }
                <Link to="/produtos" className="keep-buying">
                  CONTINUAR COMPRANDO
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="cart-empty">
            <TbShoppingCartExclamation className="empty-icon" />
            <p className="empty-warning">Seu carrinho está vazio</p>
            <Link to="/produtos" className="empty-button">
              VEJA NOSSOS PRODUTOS
            </Link>
          </div>
        )}
        <ShopInfo />
        {isconfirme
          ?
          <div className='loading'>
            <p>Processando Pedido</p>
            <img src={loading} />
          </div>
          :
          <></>
        }
      </CartContainer>
      <SimpleFooter />
    </>
  );
}
