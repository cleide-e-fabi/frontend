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
import { IoMdLock } from 'react-icons/io';

export default function Cart() {
  const { cartProducts, setCartProducts, products } = useContext(
    UserContext,
  ) as any;
  const [cartLS, setCartLS] = useState<any[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [isconfirme, setIsconfirme] = useState<boolean>(false);

  useEffect(() => {
    setCartLS(JSON.parse(localStorage.getItem('cartProducts') as any));

    let newTotalPrice = 0.0;

    cartProducts.forEach((product: any) => {
      newTotalPrice += product.price * product.amount;
    });

    setTotalPrice(newTotalPrice);
  }, [cartProducts]);

  const createOrder = (event: any) => {
    event.stopPropagation();
    setIsconfirme(true);

    let url = 'https://fanaiana.mycartpanda.com/checkout/';

    cartProducts.forEach((i: any) => {
      url = url + i.variant_id + ':' + i.amount + '&';
    });
    window.location.href = url;
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

  // Função para adicionar/remover produtos ao carrinho
  const handleCheckboxChange = (product: any, isChecked: boolean) => {
    if (isChecked) {
      // Adicionar produto ao carrinho
      const productInCart = cartProducts.find((p: any) => p.id === product.id);
      let updatedCartProducts;

      if (productInCart) {
        // Se já existe no carrinho, apenas aumenta a quantidade
        updatedCartProducts = cartProducts.map((p: any) =>
          p.id === product.id ? { ...p, amount: p.amount + 1 } : p,
        );
      } else {
        // Caso contrário, adiciona o produto com quantidade 1
        updatedCartProducts = [...cartProducts, { ...product, amount: 1 }];
      }

      setCartProducts(updatedCartProducts);
      localStorage.setItem('cartProducts', JSON.stringify(updatedCartProducts));
    } else {
      // Remover produto do carrinho
      const updatedCartProducts = cartProducts.filter(
        (p: any) => p.id !== product.id,
      );
      setCartProducts(updatedCartProducts);
      localStorage.setItem('cartProducts', JSON.stringify(updatedCartProducts));
    }
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
                      {product.collection == 'buques' ? (
                        <h2 className="cart-product-category">{'buquês'}</h2>
                      ) : (
                        <h2 className="cart-product-category">
                          {product.collection}
                        </h2>
                      )}
                      <h1 className="cart-product-title">{product.title}</h1>
                    </div>
                  </div>
                  <div className="cart-product-quantities">
                    <div className="amount-compare_at_price">
                      R$ {product.compare_at_price}
                    </div>
                    <div className="amount-price">
                      R$ {(product.price * product.amount).toFixed(2)}
                    </div>
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
                <p className="total-price">
                  Total: <span>{`R$ ${totalPrice.toFixed(2)}`}</span>
                </p>
                <h5 className="frete-warning">*valor sem o frete</h5>
                <div className="finalize-purchase" onClick={createOrder}>
                  FINALIZAR COMPRA
                </div>
                <Link to="/produtos" className="keep-buying">
                  CONTINUAR COMPRANDO
                </Link>
              </div>
            </div>
            <div className="payment-warning">
              <IoMdLock className="warning-lock" />
              <h1>Pagamento Seguro</h1>
              <h2>
                Suas informações de pagamento são processadas com segurança. Nós
                não armazenamos dados do cartão de crédito nem temos acesso aos
                números do seu cartão.
              </h2>
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
        {cartLS.length !== 0 ? (
          <div className="related-itens">
            <p className="related-title">Aproveite e compre junto!</p>
            <div className="products-related">
              {products.slice(-8).map((i: any) => (
                <div key={i.id} className="product-item">
                  <img className="product-img" src={i.url_image[0]} />
                  <p className="product-title">{i.title}</p>
                  <h2 className="product-price">
                    R$ {i.price} <span>R$ {i.compare_at_price}</span>
                  </h2>
                  <h3 className="product-quota">
                    Até <span>3x</span> de{' '}
                    <span>R$ {(i.price / 3).toFixed(2)}</span>
                  </h3>
                  {/* Checkbox para adicionar/remover do carrinho */}
                  <label className="checkbox-product">
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        handleCheckboxChange(i, e.target.checked)
                      }
                    />
                  </label>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <></>
        )}
        <ShopInfo />
        {isconfirme ? (
          <div className="loading">
            <p>Processando Pedido</p>
            <img src={loading} />
          </div>
        ) : (
          <></>
        )}
      </CartContainer>
      <SimpleFooter />
    </>
  );
}
