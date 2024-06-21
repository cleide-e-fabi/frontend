import { AboutContainer } from "../components/About/About.styles";
import Header from "../components/Home/Header/Header";
import * as svgs from "../assets/svgs";
import { Title } from "../components/Title";
import cleidefabi from "../assets/imgs/cleidefabi_img.jpeg";

export default function About() {
    return (
        <AboutContainer>
            <Header />
            <Title>
                <p>ONDE TUDO COMEÇOU</p>
                <span className="line"></span>
            </Title>
            <div className="about-content">
                <img src={cleidefabi} className="div-container" />
                <div className="about-text">
                    <p>{`Tudo começou com o sonho da Cleide de abrir o seu próprio negócio. Como somos muito unidas, 
                ela me convidou para sermos sócias. Mergulhamos juntas nesse sonho que se tornou a nossa realidade. Já trabalhamos juntas 
                há 15 anos e tornamos a loja CleideFabiPresentes conhecida em nossa região. Agora, estamos expandindo para a internet e o 
                e-commerce, pois recebemos muitos relatos de clientes que não encontravam lojas semelhantes à nossa em suas localidades.`}
                    </p>
                    <br />
                    <p>{`Assim, surgiu o desejo de criar um site para atender cada seguidor e cliente. Há décadas confeccionamos presentes com excelência, 
                que transmitem amor e alegria a quem os recebe.`}</p>
                    <br />
                    <p>
                        {`É um prazer atender você como nosso cliente. Seja bem-vindo à loja CleideFabiPresentes. 
                Você é muito especial para nós.`}
                    </p>
                    <br />
                    <p>
                        {` att. Cleide e Fabi`}
                    </p>
                </div>
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