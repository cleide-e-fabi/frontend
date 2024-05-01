import { ProductContainer } from "../components/Product/ProductContainer";
import Header from "../components/Home/Header/Header";

export default function Product(){
    return (
        <ProductContainer>
            <Header/>
            <div className="product-content">
                <div className="product-info"></div>
                <div className="product-payment">
                    <h6>Em estoque | 1424 vendidos</h6>
                    <h5>Baú de Madeira personalizado</h5>
                </div>
            </div>
        </ProductContainer>
    );
}