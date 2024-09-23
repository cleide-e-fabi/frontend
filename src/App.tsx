import styled from 'styled-components';
import { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import UserContext from './contexts/UserContext';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import theme from './styles/theme';
import Replacement from './pages/Replacement';
import Policy from './pages/Policy';
import Contact from './pages/Contact';
import Product from './pages/Product';
import { useEffect } from 'react';
import Cart from './pages/Cart';
import axios from 'axios';
import { productsConst } from './assets/consts/productsConst';
import { categoriesConst } from './assets/consts/categoriesConst';
import Collections from './pages/Collections';

export default function App() {
  const cartFromLS =
    JSON.parse(localStorage.getItem('cartProducts') as any) || [];
  const productsFromLS =
    JSON.parse(localStorage.getItem('products') as any) || [];
  const categoriesFromLS =
    JSON.parse(localStorage.getItem('productsCategories') as any) ||
    productsConst;

  const [products, setProducts] = useState<any[]>(productsFromLS);
  const [productsCategories, setProductsCategories] =
    useState<any[]>(categoriesFromLS);
  const [cartProducts, setCartProducts] = useState<any[]>(cartFromLS);

  useEffect(() => {
    if (products) {
      setProducts(productsConst);
    }
    if (productsCategories) {
      setProductsCategories(categoriesConst);
    }
  }, []);

  useEffect(() => {
    const promise = axios.get('https://backend-ewwx.onrender.com/products');
    promise.then((answer) => {
      setProducts(answer.data);
    });
  }, []);

  useEffect(() => {
    const promiseCategories = axios.get(
      'https://backend-ewwx.onrender.com/categories',
    );
    promiseCategories.then((answer) => {
      setProductsCategories(answer.data);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  }, [cartProducts]);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem(
      'productsCategories',
      JSON.stringify(productsCategories),
    );
  }, [productsCategories]);

  return (
    <Body>
      <GlobalStyle />
      <HashRouter>
        <UserContext.Provider
          value={{
            products,
            cartProducts,
            setCartProducts,
            productsCategories,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/produtos/:idProduto" element={<Product />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/troca" element={<Replacement />} />
            <Route path="/termos" element={<Policy />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/carrinho" element={<Cart />} />
            <Route path="/:collection" element={<Collections />} />
          </Routes>
        </UserContext.Provider>
      </HashRouter>
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;
  background-color: ${theme.colors.gray};
  position: relative;
  z-index: 1;
`;
