import styled from "styled-components";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import Home from "./pages/Home";

export default function App() {
  return (
    <Body>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </Body>
  );
}

const Body = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colors.primary};
`;

