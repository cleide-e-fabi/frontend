import { Header } from "../components/Header.styles";
import { StyledHome } from "../components/Home.styles";
import { HomeContent } from "../components/HomeContent.styles";
import { Mosaico } from "../components/Mosaico.styles";
import { Footer } from "../components/Footer";
import mosaico from "../assets/imgs/mosaico.png";

export default function Home() {
  return (
    <StyledHome>
      <Header></Header>
      <Mosaico src={mosaico}/>
      <HomeContent>
        <p>PRESENTEIE ALGUÉM ESPECIAL PARA VOCÊ!</p>
        <sub>Confira em nossa loja, monte sua cesta personalizada para presentear aquela pessoa amada.</sub>
        <button>CONFERIR</button>
      </HomeContent>
      <Footer></Footer>
    </StyledHome>
  );
}
