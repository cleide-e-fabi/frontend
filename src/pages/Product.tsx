import { ProductContainer } from "../components/Product/ProductContainer";
import Header from "../components/Home/Header/Header";
import { useState } from "react";
import { Description } from "../components/Product/Description";
// import { useParams } from "react-router-dom";
// import { useEffect } from "react";
// import axios from "axios";

export default function Product() {
    // const { idProduto } = useParams() as any;
    // const [product, setProduct] = useState<any | null>(null); 

    const teste = [
        {
            "id": 10955701,
            "shop_id": 321822,
            "title": "Kit Balde Cerveja Heineken",
            "price": "169.90",
            "compare_at_price": "209.90",
            "url_image": [
                "https:/assets.mycartpanda.com/static/products_images/57/16/83/1689335814.png"
            ],
            "description": "<p><span style=\"font-size: 18px; line-height: 107%; font-family: Poppins;\">Você é um verdadeiro apreciador de cerveja? Então este kit é feito sob medida para você!&nbsp;</span></p><p><img src=\"https://assets.mycartpanda.com/fanaiana/png/1PHfndY4PuRZagTHzj2AtP0R0fzjkqMVfVGwwGzI.png\" style=\"width: 512px;\" class=\"fr-fic fr-dib\"></p><p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:\"Calibri\",sans-serif;'><span style=\"font-size: 18px; line-height: 107%; font-family: Poppins;\">Prepare-se para desfrutar de momentos inesquecíveis com a <strong><span style=\"color: rgb(0, 0, 0);\">qualidade e o sabor inconfundível da Heineken.</span></strong> Este kit exclusivo foi especialmente projetado para proporcionar a você uma experiência completa de sabores e diversão.&nbsp;</span></p><p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:\"Calibri\",sans-serif;'><br></p><p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:\"Calibri\",sans-serif;'><span style=\"font-size: 18px; line-height: 107%; font-family: Poppins;\"><strong><span style=\"color: rgb(0, 0, 0);\">Veja o que vem na Balde:</span></strong></span></p><p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:\"Calibri\",sans-serif;'><span style=\"font-size: 18px;\"><span style=\"font-family:Poppins;\">1 - balde de lata personalizado.</span></span></p><p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:\"Calibri\",sans-serif;'><span style=\"font-size: 18px;\"><span style=\"font-family:Poppins;\">4 - Cerveja Heineken de 250 ml.</span></span></p><p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:\"Calibri\",sans-serif;'><span style=\"font-size: 18px;\"><span style=\"font-family:Poppins;\">1 - Salgadinho Equilíbri 40 gr.</span></span></p><p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:\"Calibri\",sans-serif;'><span style=\"font-size: 18px;\"><span style=\"font-family:Poppins;\">1 - &nbsp;Torcida 70gr.</span></span></p><p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:\"Calibri\",sans-serif;'><span style=\"font-size: 18px;\"><span style=\"font-family:Poppins;\">2 - Amendoim Nuts 30 gr.</span></span></p><p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:\"Calibri\",sans-serif;'><span style=\"font-size: 18px;\"><span style=\"font-family:Poppins;\">1 - Bombom ouro branco.&nbsp;</span></span></p><p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:\"Calibri\",sans-serif;'><span style=\"font-family: Poppins; font-size: 18px;\">1 - Copo de chopp 400 ml de vidro.</span></p><p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:\"Calibri\",sans-serif;'><br></p><p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:\"Calibri\",sans-serif;'><span style=\"font-family: Poppins; font-size: 18px; color: rgb(0, 0, 0);\"><strong>Dimensões:</strong></span></p><p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:\"Calibri\",sans-serif;'><span style=\"font-size: 18px;\"><span style=\"font-family:Poppins;\">Peso 2.984</span></span></p><p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:\"Calibri\",sans-serif;'><span style=\"font-size: 18px;\"><span style=\"font-family:Poppins;\">Altura :30&nbsp;</span></span></p><p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:\"Calibri\",sans-serif;'><span style=\"font-family: Poppins; font-size: 18px;\">Larg:30</span></p>"
        }
    ];

    const [selectedImage, setSelectedImage] = useState(teste[0].url_image[0]);

    const handleImageClick = (image: any) => {
        setSelectedImage(image);
    };

    const stripStyles = (htmlString: any) => {
        return htmlString.replace(/style="[^"]*"/g, '');
    };

    const renderHTML = (htmlString: any) => {
        return { __html: stripStyles(htmlString) };
    };


    return (
        <ProductContainer>
            <Header />
            <div className="product-content">
                <div className="product-info">
                    <ul className="img-list">
                        {teste[0].url_image.map((image, index) =>
                            <li key={index}>
                                <img
                                    className="img-select"
                                    src={image}
                                    alt={`Product ${index}`}
                                    onClick={() => handleImageClick(image)}
                                />
                            </li>
                        )}
                    </ul>
                    <div className="img-container">
                        <img
                            className="product-img"
                            src={selectedImage}
                            alt={teste[0].title}
                        />
                    </div>
                    <div className="product-description">
                        <h1 className="description-title">Descrição</h1>
                        <Description dangerouslySetInnerHTML={renderHTML(teste[0].description)}></Description>
                    </div>
                </div>
                <div className="product-payment">
                    <p>Preço: {teste[0].price}</p>
                </div>
            </div>
        </ProductContainer>
    );
}
