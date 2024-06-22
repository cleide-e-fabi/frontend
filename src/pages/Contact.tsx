import Header from '../components/Home/Header/Header';
import { ReplacementContainer } from '../components/Replacement/ReplacementContainer';
import { Title } from '../components/Title';

export default function Contact() {
  return (
    <ReplacementContainer>
      <Header />
      <Title>
        <p>CONTATO</p>
        <span className="line"></span>
      </Title>
      <p className="replacement-text">
        Bem-vindo à página de contato da Empresa{' '}
        <strong>Cleide & Fabi Presentes</strong>!
        <br />
        <br />
        Estamos felizes em saber que você está interessado em entrar em contato
        conosco. Nossa equipe está pronta para ajudar e responder a todas as
        suas perguntas sobre nossos produtos e serviços.
        <br />
        <br />
        Se você deseja fazer uma pergunta, dar sugestōes ou fazer um pedido
        personalizado, fique à vontade para entrar em contato conosco. Nós
        valorizamos a opiniāo de nossos clientes e estamos ansiosos para ouvir
        de você.
        <br />
        <br />
        Você pode nos contatar de várias maneiras convenientes:
        <br />
        <br />
        <strong>Por telefone:</strong> Se você preferir um contato direto, ligue
        para o número <strong>(11)94729-2964</strong> e teremos prazer em
        atendê-lo.
        <br />
        <strong>Por e-mail:</strong> Se você quiser nos enviar um e-mail,
        escreva para <strong>atendimento@cleidefabi.com.br</strong> que a nossa
        equipe responderá prontamente às suas dúvidas.
        <br />
        <strong>Pessoalmente:</strong> Se você estiver na área, visite nossa
        loja física localizada na{' '}
        <strong>
          Rua Porto Velho 597, Jardim Cumbica, Guarulhos São Paulo
        </strong>
        . Teremos o prazer de recebê-lo e ajudá-lo a encontrar o presente
        perfeito. Além disso, você pode nos seguir nas redes sociais para ficar
        por dentro das últimas novidades, promoçōes e inspiraçōes de presentes.
        Siga-nos no Facebook, Instagram e Twitter para se conectar conosco.
        <br />
        <br />
        Agradecemos seu interesse na Empresa{' '}
        <strong>Cleide & Fabi Presentes</strong>. Estamos ansiosos para
        atendê-lo e tornar sua experiência conosco memorável. Entre em contato
        hoje mesmo e deixe-nos ajudá-lo a encontrar o presente ideal!
        <br />
        <br />
        Atenciosamente, Equipe <strong>Cleide & Fabi Presentes</strong>
      </p>
    </ReplacementContainer>
  );
}
