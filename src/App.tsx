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

export default function App() {
  const [name, setNameLS] = useState("");
  const [token, setTokenLS] = useState("");

  return (
    <Body>
      <GlobalStyle />
      <UserContext.Provider value={{ name, setNameLS, token, setTokenLS }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/produtos" element={<Products />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/troca" element={<Replacement/>}/>
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
