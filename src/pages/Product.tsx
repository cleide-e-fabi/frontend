import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { ProductContainer } from "../components/Product/ProductContainer";
import Header from "../components/Home/Header/Header";
import { Description } from "../components/Product/Description";
import SimpleFooter from "../components/SimpleFooter/SimpleFooter";
import ShopInfo from "../components/ShopInfo/ShopInfo";
import { FaPix } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import { FaCreditCard } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";
import ShipForm from "../components/ShipForm/ShipForm";
import { CounterStyles } from '../components/Counter/CounterStyles.styles';
import * as flags from "../assets/flags";
import UserContext from "../contexts/UserContext";

export default function Product() {

    const { idProduto } = useParams() as any;
    const [product, setProduct] = useState<any>(null);
    const [price, setPrice] = useState<number>(0);
    const [selectedImage, setSelectedImage] = useState<string>("");
    const { setCartProducts } = useContext(UserContext) as any;
    const [count, setCount] = useState<number>(1);
    const [showAdded, setShowAdded] = useState<string>("added-hidden");
    const fees = [0.1087, 0.1231, 0.1369, 0.1470, 0.1619, 0.1774, 0.1861, 0.2013, 0.2168];

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const decrement = () => {
        setCount((prevCount) => Math.max(prevCount - 1, 1));
    };

    useEffect(() => {
        axios.get(`https://gifts-back.onrender.com/products/${idProduto}`)
            .then(response => {
                setProduct(response.data);
                setPrice(response.data[0].price);
                setSelectedImage(response.data[0].url_image[0]);
            })
            .catch(error => {
                console.error("Erro ao buscar o produto:", error);
            });

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
                    (cartProduct: any) => cartProduct.id === productToAdd.id
                );

                if (existingProductIndex !== -1) {
                    const updatedCartProducts = [...prevCartProducts];
                    updatedCartProducts[existingProductIndex].amount += 1;
                    return updatedCartProducts;
                } else {
                    return [...prevCartProducts, productToAdd];
                }
            });
            setShowAdded("added-show");
            setTimeout(() => {
                setShowAdded("added-hidden");
            }, 1500);
        }
    };

    if (!product) {
        return (
            <ProductContainer>
                <Header />
                <div className="product-content">
                    Carregando...
                </div>
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
                            <Description dangerouslySetInnerHTML={renderHTML(product[0].description)}></Description>
                        </div>
                    </div>
                    <div className="product-payment-container">
                        <div className="product-payment">
                            <p className="product-name">{product[0].title}</p>
                            <h5 className="product-cod">{`(Cód. do ítem ${idProduto}) | `}<span className="product-dis">{`Disponível em estoque`}</span></h5>
                            <span className="product-line"></span>
                            <h3 className="product-compare">R$ {product[0].compare_at_price}</h3>
                            <div className="product-price"><h1 className="price-value">R$ {product[0].price}</h1> <span className="discount-percent">🡻 {Math.round(((product[0].compare_num - product[0].price_num) / product[0].compare_num) * 100)}%</span></div>
                            <h2 className="product-saving">{`Economia de R$ ${((product[0].compare_at_price - product[0].price)).toFixed(2)}`}</h2>
                            <div className="product-pix-info">
                                <FaPix />
                                <h4 className="descount-pix">Até <strong className="descount-pix-value">5% off</strong> no PIX!</h4>
                            </div>
                            <div className="product-pay-options">Ver mais opções de pagamento</div>
                            <CounterStyles>
                                <h6 className="product-quantity">Quantidade:</h6>
                                <button className="minus quantity-button" onClick={decrement}>-</button>
                                <div className="quantity-value">{count}</div>
                                <button className="plus quantity-button" onClick={increment}>+</button>
                            </CounterStyles>
                            <p className="product-ship-text">Entrega: <span>Calcular frete e prazo</span></p>
                            <ShipForm />
                            <div className='quotas-container'>
                                <div className='quotas-flags'>
                                    <ul className="quotas-card-flags">
                                        <img src={flags.amex} className="quota-flag" />
                                        <img src={flags.elo} className="quota-flag" />
                                        <img src={flags.visa} className="quota-flag" />
                                        <img src={flags.hipercard} className="quota-flag" />
                                        <img src={flags.mastercard} className="quota-flag" />
                                    </ul>
                                    <p className="quotas-text">{`Parcelas:`}</p>
                                </div>
                                <div className='quotas-list'>
                                    <ul className='quotas-column'>
                                        <li className='quota-value'><strong>1x</strong>{` de R$ ${price}`}</li>
                                        <li className='quota-value'><strong>2x</strong>{` de R$ ${(Number(price / 2)).toFixed(2)}`}</li>
                                        <li className='quota-value'><strong>3x</strong>{` de R$ ${(Number(price / 3)).toFixed(2)}`}</li>
                                        <li className='quota-value'><strong>4x</strong>{` de R$ ${((Number(price) * (1 + fees[0])) / 4).toFixed(2)}*`}</li>
                                        <li className='quota-value'><strong>5x</strong>{` de R$ ${((Number(price) * (1 + fees[1])) / 5).toFixed(2)}*`}</li>
                                        <li className='quota-value'><strong>6x</strong>{` de R$ ${((Number(price) * (1 + fees[2])) / 6).toFixed(2)}*`}</li>
                                    </ul>
                                    <ul className='quotas-column'>
                                        <li className='quota-value quota-right'><strong>7x</strong>{` de R$ ${((Number(price) * (1 + fees[3])) / 7).toFixed(2)}*`}</li>
                                        <li className='quota-value quota-right'><strong>8x</strong>{` de R$ ${((Number(price) * (1 + fees[4])) / 8).toFixed(2)}*`}</li>
                                        <li className='quota-value quota-right'><strong>9x</strong>{` de R$ ${((Number(price) * (1 + fees[5])) / 9).toFixed(2)}*`}</li>
                                        <li className='quota-value quota-right'><strong>10x</strong>{` de R$ ${((Number(price) * (1 + fees[6])) / 10).toFixed(2)}*`}</li>
                                        <li className='quota-value quota-right'><strong>11x</strong>{` de R$ ${((Number(price) * (1 + fees[7])) / 11).toFixed(2)}*`}</li>
                                        <li className='quota-value quota-right'><strong>12x</strong>{` de R$ ${((Number(price) * (1 + fees[8])) / 12).toFixed(2)}*`}</li>
                                    </ul>
                                </div>
                                <h6 className='fees-text'>{`Com juros*`}</h6>
                                <h2 className='pix-discount'>{`5% de desconto no PIX | `}<strong> {`R$ ${(Number(price) * 0.95).toFixed(2)}`}</strong></h2>
                            </div>
                            <button className="buy-button">
                                <CiShoppingCart />
                                <Link to="/checkout">COMPRAR AGORA</Link>
                            </button>
                            <button className="cart-button" onClick={handleAddToCart}>ADICIONAR AO CARRINHO</button>
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
                            <h1>
                                Pagamento Seguro
                            </h1>
                            <h2>
                                Suas informações de pagamento são processadas com segurança.
                                Nós não armazenamos dados do cartão de crédito nem temos
                                acesso aos números do seu cartão.
                            </h2>
                        </div>
                    </div>
                </div>
                <ShopInfo />
            </ProductContainer>
            <SimpleFooter />
        </>
    );
}


