import { ProductContainer } from "../components/Product/ProductContainer";
import Header from "../components/Home/Header/Header";
import { Description } from "../components/Product/Description";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

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
        return <div>Carregando...</div>;
    }

    return (
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
                <div className="product-payment">
                    <p>Preço: {product[0].price}</p>
                </div>
            </div>
        </ProductContainer>
    );
}
