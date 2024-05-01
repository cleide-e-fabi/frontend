import { ProductsContainer } from "../components/Products/Products.styles";
import { ProductsList } from "../components/Products/ProductsList";
import Header from "../components/Home/Header/Header";
import { arrayproducts } from "./arrayproducts";
import * as svgs from "../assets/svgs/index";
import { Title } from "../components/Title";
import { AiFillHeart } from "react-icons/ai";
import { FaArrowCircleUp } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";


export default function Products() {

  return (
    <ProductsContainer>
      <Header />
      <Title>
        <h6>PRODUTOS</h6>
        <span className="line"></span>
      </Title>
      <div className="product-filters">
        <div className="products-form">
        <input className="product-search" type="search" />
          <div className="search-icon">
          <FaSearch />
          </div>
        </div>
        <ul className="filters">
          <li className="filter">
            <h6>Mais Vendido</h6>
            <AiFillHeart />
          </li>
          <li className="filter">
            <h6>Maior Preço</h6>
            <FaArrowCircleUp />
          </li>
          <li className="filter">
            <h6>Menor Preço</h6>
            <FaArrowCircleDown />
          </li>
        </ul>
      </div>
      <ProductsList>
        {arrayproducts.map(i =>
          <li key={i.id} className="product-item">
            <div
              className="product-img"
              style={{ backgroundImage: `url(${i.url})` }}>
            </div>
            <p className="product-title">{i.nome}</p>
            <h2 className="product-price">R$ {i.preco}</h2>
            <img className="product-plus" src={svgs.plus} />
          </li>
        )}
      </ProductsList>

    </ProductsContainer>
  );
}
