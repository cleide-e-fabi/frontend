import React, { useState, useContext } from 'react';
import { ProductsContainer } from "../components/Products/Products.styles";
import { ProductsList } from "../components/Products/ProductsList";
import Header from "../components/Home/Header/Header";
import * as svgs from "../assets/svgs/index";
import { Title } from "../components/Title";
import { AiFillHeart } from "react-icons/ai";
import { FaArrowCircleUp } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import UserContext from '../contexts/UserContext';
import { Link } from 'react-router-dom';
import SimpleFooter from '../components/SimpleFooter/SimpleFooter';
import ShopInfo from '../components/ShopInfo/ShopInfo';


export default function Products() {

  const [searchTerm, setSearchTerm] = useState<string>('');

  const { products } = useContext(UserContext) as any;

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product: { title: string; }) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <ProductsContainer>
        <Header />
        <Title>
          <p>PRODUTOS</p>
          <span className="line"></span>
        </Title>
        <div className="product-filters">
          <div className="products-form">
            <input
              className="product-search"
              type="search"
              placeholder="Pesquisar produto..."
              value={searchTerm}
              onChange={handleSearch}
            />
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
          {filteredProducts.map((i: any) =>
            <Link key={i.id} className="product-item" to={`/produtos/${i.id}`}>
              <div
                className="product-img"
                style={{ backgroundImage: `url(${i.url_image[0]})` }}>
              </div>
              <p className="product-title">{i.title}</p>
              <h2 className="product-price">R$ {i.price}</h2>
              <img className="product-plus" src={svgs.plus} />
            </Link>
          )}
        </ProductsList>
        <ShopInfo />
      </ProductsContainer>
      <SimpleFooter />
    </>
  );
}
