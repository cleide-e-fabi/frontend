import styled from "styled-components";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import UserContext from "./contexts/UserContext";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import theme from "./styles/theme";
import Replacement from "./pages/Replacement";
import Policy from "./pages/Policy";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import { useEffect } from "react";
import axios from "axios";

export default function App() {

  const [name, setNameLS] = useState("");
  const [token, setTokenLS] = useState("");
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const promise = axios.get("http://localhost:3333/products")
    promise.then(answer => { (setProducts(answer.data)) })
  }, [])

  return (
    <Body>
      <GlobalStyle />
      <UserContext.Provider value={{ name, setNameLS, token, setTokenLS, products }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/produtos" element={<Products />} />
            <Route path="/produtos/:idProduto" element={<Product />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/troca" element={<Replacement/>}/>
            <Route path="/termos" element={<Policy/>}/>
            <Route path="/contato" element={<Contact/>}/>
    
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;
  background-color: ${theme.colors.gray};
`;
