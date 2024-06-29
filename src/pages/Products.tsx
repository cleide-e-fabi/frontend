import React, { useState, useContext } from 'react';
import { ProductsContainer } from '../components/Products/Products.styles';
import { ProductsList } from '../components/Products/ProductsList';
import Header from '../components/Home/Header/Header';
import { Title } from '../components/Title';
// import { FaArrowCircleUp } from 'react-icons/fa';
// import { FaArrowCircleDown } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
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

  const filteredProducts = products.filter((product: { title: string }) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (!products) {
    return (
      <ProductsContainer>
        <Header />
        <div className="product-content">Carregando...</div>
      </ProductsContainer>
    );
  }

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
            {/* <li className="filter">
              <h6>Maior Preço</h6>
              <FaArrowCircleUp />
            </li>
            <li className="filter">
              <h6>Menor Preço</h6>
              <FaArrowCircleDown />
            </li> */}
          </ul>
        </div>
        <ProductsList>
          {filteredProducts.map((i: any) => (
            <Link key={i.id} className="product-item" to={`/produtos/${i.id}`}>
              <img className="product-img" src={i.url_image[0]} />
              <p className="product-title">{i.title}</p>
              <h2 className="product-price">
                R$ {i.price} <span>R$ {i.compare_at_price}</span>
              </h2>
              <h3 className="product-quota">
                Até <span>3x</span> de{' '}
                <span>R$ {(i.price / 3).toFixed(2)}</span>
              </h3>
            </Link>
          ))}
        </ProductsList>
        <ShopInfo />
      </ProductsContainer>
      <SimpleFooter />
    </>
  );
}
