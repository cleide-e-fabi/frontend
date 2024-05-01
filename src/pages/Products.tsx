import { ProductsContainer } from "../components/Products/Products.styles";
import { ProductsList } from "../components/Products/ProductsList";
import Header from "../components/Home/Header/Header";
import { arrayproducts } from "./arrayproducts";
import * as svgs from "../assets/svgs/index";
import { Title } from "../components/Title";

export default function Products() {

  return (
    <ProductsContainer>
      <Header />
      <Title>
        <h6>PRODUTOS</h6>
        <span className="line"></span>
      </Title>
      <ProductsList>
        {arrayproducts.map(i =>
          <li key={i.id} className="product-item">
            <div
              className="product-img"
              style={{ backgroundImage: `url(${i.url})` }}>
            </div>
            <p className="product-title">{i.nome}</p>
            <h2 className="product-price">{i.preco}</h2>
            <img className="product-plus" src={svgs.plus} />
          </li>
        )}
      </ProductsList>

    </ProductsContainer>
  );
}
