import { ProductContainer } from "../components/Product/ProductContainer";
import Header from "../components/Home/Header/Header";
import { Description } from "../components/Product/Description";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SimpleFooter from "../components/SimpleFooter/SimpleFooter";
import ShopInfo from "../components/ShopInfo/ShopInfo";
import { FaPix } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import { FaCreditCard } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";
import ShipForm from "../components/ShipForm/ShipForm";
import Counter from "../components/Counter/Counter";
import * as flags from "../assets/flags";

export default function Product() {

    const { idProduto } = useParams() as any;
    const [product, setProduct] = useState<any>(null);
    const [selectedImage, setSelectedImage] = useState<string>("");

    useEffect(() => {
        axios.get(`http://localhost:3333/products/${idProduto}`)
            .then(response => {
                setProduct(response.data);
                setSelectedImage(response.data[0].url_image[0]); // Set initial selected image here
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
                <Header />
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
                            <h2 className="product-saving">{`Economia de R$ ${product[0].compare_at_price - product[0].price}`}</h2>
                            <div className="product-pix-info">
                                <FaPix />
                                <h4 className="descount-pix">Até <strong className="descount-pix-value">5% off</strong> no PIX!</h4>
                            </div>
                            <div className="product-pay-options">Ver mais opções de pagamento</div>
                            <Counter />
                            <p className="product-ship-text">Entrega: <span>Calcular frete e prazo</span></p>
                            <ShipForm />
                            <button className="buy-button">
                                <CiShoppingCart />
                                <span>COMPRAR AGORA</span>
                            </button>
                            <button className="cart-button">ADICIONAR AO CARRINHO</button>
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
                            <IoMdLock className="warning-lock"/>
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
