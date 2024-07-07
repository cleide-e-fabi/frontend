import styled from 'styled-components';
import { useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
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

export default function App() {
  const navigate = useNavigate();
  const cartFromLS =
    JSON.parse(localStorage.getItem('cartProducts') as any) || [];
  const productsFromLS =
    JSON.parse(localStorage.getItem('products') as any) || [];
  const [products, setProducts] = useState<any[]>(productsFromLS);
  const [cartProducts, setCartProducts] = useState<any[]>(cartFromLS);

  const RedirectToRoot = () => {
    useEffect(() => {
      if (window.location.pathname !== '/') {
        navigate('/');
      }
    }, [navigate]);

    return null;
  };

  useEffect(() => {
    const promise = axios.get('https://gifts-back.onrender.com/products');
    promise.then((answer) => {
      setProducts(answer.data);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  }, [cartProducts]);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  return (
    <Body>
      <GlobalStyle />
      <UserContext.Provider value={{ products, cartProducts, setCartProducts }}>
        <BrowserRouter>
          <RedirectToRoot />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/produtos/:idProduto" element={<Product />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/troca" element={<Replacement />} />
            <Route path="/termos" element={<Policy />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/carrinho" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;
  background-color: ${theme.colors.gray};
  position: relative;
  z-index: 1;
`;
