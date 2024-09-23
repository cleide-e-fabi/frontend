import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContainer } from '../components/Product/ProductContainer';
import Header from '../components/Home/Header/Header';
import { Description } from '../components/Product/Description';
import SimpleFooter from '../components/SimpleFooter/SimpleFooter';
import ShopInfo from '../components/ShopInfo/ShopInfo';
import { FaPix } from 'react-icons/fa6';
import { HiShoppingCart } from 'react-icons/hi';
import { FaCreditCard } from 'react-icons/fa6';
import { IoMdLock } from 'react-icons/io';
import ShipForm from '../components/ShipForm/ShipForm';
import { CounterStyles } from '../components/Counter/CounterStyles.styles';
import * as flags from '../assets/flags';
import UserContext from '../contexts/UserContext';

export default function Product() {
  const { idProduto } = useParams() as any;
  const { products, setCartProducts } = useContext(UserContext) as any;
  const [product, setProduct] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [count, setCount] = useState<number>(1);
  const [showAdded, setShowAdded] = useState<string>('added-hidden');

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 1));
  };

  const getObjectById = (id: number) => {
    const obj = products.find((item: any) => Number(item.id) === Number(id));
    return obj;
  };

  useEffect(() => {
    const obj = getObjectById(Number(idProduto));
    setProduct([obj]);
    setSelectedImage(obj.url_image[0]);
  }, [idProduto]);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const stripStyles = (htmlString: string) => {
    return htmlString.replace(/style="[^"]*"/g, '');
  };

  const renderHTML = (htmlString: string) => {
    return { __html: stripStyles(htmlString) };
  };

  const handleAddToCart = () => {
    if (product && product.length > 0) {
      const productToAdd = { ...product[0], amount: count };
      setCartProducts((prevCartProducts: any[]) => {
        const existingProductIndex = prevCartProducts.findIndex(
          (cartProduct: any) => cartProduct.id === productToAdd.id,
        );

        if (existingProductIndex !== -1) {
          const updatedCartProducts = [...prevCartProducts];
          updatedCartProducts[existingProductIndex].amount += 1;
          return updatedCartProducts;
        } else {
          return [...prevCartProducts, productToAdd];
        }
      });
      setShowAdded('added-show');
      setTimeout(() => {
        setShowAdded('added-hidden');
      }, 1500);
    }
  };

  if (!product) {
    return (
      <ProductContainer>
        <Header />
        <div className="product-content">Carregando...</div>
      </ProductContainer>
    );
  }

  return (
    <>
      <ProductContainer>
        <Header showAdded={showAdded} />
        <div className="product-content">
          <div className="product-info">
            <ul className="img-list">
              {product[0].url_image.map((image: string, index: number) => (
                <li key={index}>
                  <img
                    className="img-select"
                    src={image}
                    alt={`Product ${index}`}
                    onClick={() => handleImageClick(image)}
                  />
                </li>
              ))}
            </ul>
            <div className="img-container">
              <img
                className="product-img"
                src={selectedImage}
                alt={product[0].title}
              />
            </div>
            <div className="product-description">
              <h1 className="description-title">Descrição</h1>
              <Description
                dangerouslySetInnerHTML={renderHTML(product[0].description)}
              ></Description>
            </div>
          </div>
          <div className="product-payment-container">
            <div className="product-payment">
              <p className="product-name">{product[0].title}</p>
              <h5 className="product-cod">
                {`(Cód. do ítem ${idProduto}) | `}
                <span className="product-dis">{`Disponível em estoque`}</span>
              </h5>
              <span className="product-line"></span>
              <h3 className="product-compare">
                R$ {product[0].compare_at_price}
              </h3>
              <div className="product-price">
                <h1 className="price-value">R$ {product[0].price}</h1>{' '}
                <span className="discount-percent">
                  🡻{' '}
                  {Math.round(
                    ((product[0].compare_num - product[0].price_num) /
                      product[0].compare_num) *
                      100,
                  )}
                  %
                </span>
              </div>
              <h2 className="product-saving">{`Economia de R$ ${(product[0].compare_at_price - product[0].price).toFixed(2)}`}</h2>
              <div className="product-pix-info">
                <FaPix />
                <h4 className="descount-pix">
                  Até <strong className="descount-pix-value">5% off</strong> no
                  PIX!
                </h4>
              </div>
              {/* <div className="product-pay-options">
                Ver mais opções de pagamento
              </div> */}
              <CounterStyles>
                <h6 className="product-quantity">Quantidade:</h6>
                <div className="quantity-buttons-container">
                  <button className="quantity-button" onClick={decrement}>
                    -
                  </button>
                  <div className="quantity-value">{count}</div>
                  <button className="quantity-button" onClick={increment}>
                    +
                  </button>
                </div>
              </CounterStyles>
              <p className="product-ship-text">
                Entrega: <span>Calcular frete e prazo</span>
              </p>
              <ShipForm />
              <div className="button-container">
                <a
                  href={`https://fanaiana.mycartpanda.com/checkout/${product[0].variant_id}:1`}
                  className="buy-button"
                >
                  <HiShoppingCart />
                  <span>Comprar Agora</span>
                </a>
              </div>
              <div className="button-container">
                <button className="cart-button" onClick={handleAddToCart}>
                  Adicionar ao Carrinho
                </button>
              </div>
              <div className="info-credit-cards">
                <FaCreditCard className="card-icon" />
                <div className="info-credit-card-text">
                  <h2>{`Parcele suas compras `}</h2>
                  <h3>{` nas melhores bandeiras!`}</h3>
                </div>
              </div>
              <ul className="card-flags">
                <img src={flags.amex} className="flag" />
                <img src={flags.elo} className="flag" />
                <img src={flags.visa} className="flag" />
                <img src={flags.hipercard} className="flag" />
                <img src={flags.mastercard} className="flag" />
              </ul>
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
        </div>
        <div className="product-content-mobile">
          <div className="m-imgs">
            <img className="m-img" src={product[0].url_image[0]} />
          </div>
          <h1 className="m-name">{product[0].title}</h1>
          <h3 className="m-compare">R$ {product[0].compare_at_price}</h3>
          <h2 className="m-price">R$ {product[0].price}</h2>
          <h4 className="m-discount">
            Economia de R${' '}
            {(product[0].compare_at_price - product[0].price).toFixed(2)}
          </h4>
          <div className="m-ship">
            <p className="m-ship-title">Calcular Frete e Prazo</p>
            <ShipForm />
          </div>
          <div className="button-container">
            <a
              href={`https://fanaiana.mycartpanda.com/checkout/${product[0].variant_id}:1`}
              className="buy-button"
            >
              <HiShoppingCart />
              <span>Comprar Agora</span>
            </a>
          </div>
          <div className="button-container">
            <button className="cart-button" onClick={handleAddToCart}>
              Adicionar ao Carrinho
            </button>
          </div>
          <Description
            dangerouslySetInnerHTML={renderHTML(product[0].description)}
          ></Description>
        </div>
        <ShopInfo />
      </ProductContainer>
      <SimpleFooter />
    </>
  );
}
