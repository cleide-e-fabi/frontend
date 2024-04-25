import { AboutContainer } from "../components/About/About.styles";
import Header from "../components/Home/Header/Header";
import * as svgs from "../assets/svgs";

export default function About() {
    return (
        <AboutContainer>
            <Header />
            <div className="about-title">
                <h6>SOBRE NÓS</h6>
                <span className="about-line"></span>
            </div>
            <div className="about-content">
                <div className="div-container"></div>
                <p className="about-text">{`Lorem Ipsum é simplesmente uma simulação de 
                texto da indústria tipográfica e de impressos, e vem sendo utilizado desde 
                o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e 
                os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu 
                não só a cinco séculos, como também ao salto para a editoração eletrônica, 
                permanecendo essencialmente inalterado. Se popularizou na década de 60, 
                quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e 
                mais recentemente quando passou a ser integrado a softwares de editoração 
                eletrônica como Aldus PageMaker.`}
                </p>
            </div>
            <footer className="about-footer">
                <img className="about-footer-wpp" src={svgs.wpp} />
                <div className="about-footer-info">
                    <h1>{`HORÁRIO DE ATENDIMENTO`}</h1>
                    <h2>{`Segunda à Sexta: 10:00h às 18:00h`}</h2>
                    <h2>{`Sábado: 10:00h às 12:00hrs`}</h2>
                </div>
                <div className="about-footer-info">
                    <h2>{`Não entregamos domingos e feriados. Compras até às 14hrs serão 
                    entregues no dia seguinte.`}</h2>
                    <h2>{`Para entregas no mesmo dia, entre em contato pelo nosso WhatsApp.`}</h2>
                </div>
            </footer>
        </AboutContainer>
    );
}