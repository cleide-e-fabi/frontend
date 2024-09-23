import React, { useState, useContext } from 'react';
import { ProductsContainer } from '../components/Products/Products.styles';
import { ProductsList } from '../components/Products/ProductsList';
import Header from '../components/Home/Header/Header';
import { Title } from '../components/Title';
import { FaArrowCircleUp, FaArrowCircleDown, FaSearch } from 'react-icons/fa';
import { LuListFilter } from 'react-icons/lu';
import UserContext from '../contexts/UserContext';
import { Link } from 'react-router-dom';
import SimpleFooter from '../components/SimpleFooter/SimpleFooter';
import ShopInfo from '../components/ShopInfo/ShopInfo';

export default function Products() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<string>(''); // Estado para ordenar
  const { products, productsCategories } = useContext(UserContext) as any;

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (order: string) => {
    setSortOrder(order);
  };

  const filteredProducts = products
    .filter((product: { title: string }) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .sort((a: { price: number }, b: { price: number }) => {
      if (sortOrder === 'asc') {
        return a.price - b.price;
      }
      if (sortOrder === 'desc') {
        return b.price - a.price;
      }
      return 0;
    });

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
            <li className="filter-category filter">
              <h6 className="filter-category-title filter-title">Categorias</h6>
              <LuListFilter />
              <div className="categories-list">
                {productsCategories.map((category: string, index: number) => (
                  <Link
                    className="category-link"
                    key={index}
                    to={`/${category
                      .normalize('NFD')
                      .replace(/[\u0300-\u036f]/g, '') // Remover acentos
                      .toLowerCase()}`}
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </li>
            <li className="filter" onClick={() => handleSort('desc')}>
              <h6 className="filter-title">Maior Preço</h6>
              <FaArrowCircleUp />
            </li>
            <li className="filter" onClick={() => handleSort('asc')}>
              <h6 className="filter-title">Menor Preço</h6>
              <FaArrowCircleDown />
            </li>
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
