// import Header from '../components/Home/Header/Header';
import { ReplacementContainer } from '../components/Replacement/ReplacementContainer';
import SimpleFooter from '../components/SimpleFooter/SimpleFooter';
import { Title } from '../components/Title';

export default function Replacement() {
  return (
    <>
      <ReplacementContainer>
        {/* <Header /> */}
        <Title>
          <p>TROCAS E DEVOLUÇÕES</p>
          <span className="line"></span>
        </Title>
        <p className="replacement-text">
          A satisfação dos nossos clientes é de extrema importância para nós na{' '}
          <strong>Cleide & Fabi Presentes </strong>
          Por isso, temos uma política de <strong>
            troca e devoluções
          </strong>{' '}
          que visa garantir uma experiência positiva do adquirir nossos
          produtos. A seguir, detalhamos as diretrizes principais dessa
          política:
          <br />
          <br />
          <br />
          <h2>Troca de produtos com defeito:</h2>
          <br />
          Caso você receba um produto com defeito de fabricação, entre em
          contato conosco imediatamente ou no prazo de 7 dias após o
          recebimento. Faremos a análise do defeito e, se confirmado,
          providenciaremos a troca do produto por um novo, desde que haja
          disponibilidade de estoque. Se o produto estiver esgotado, você terá a
          opção de escolher um item similar ou receber um reembolso total do
          valor pago.
          <br />
          <br />
          <br />
          <h2>Troca por insatisfaçáo ou arrependimento:</h2>
          <br />
          Se, após receber seu produto, você ficar insatisfeito ou mudar de
          ideia, você tem o direito de solicitar a troca ou devolução no prazo
          de 7 dias a partir da data de recebimento. O produto deve ser
          devolvido em perfeitas condiçōes, sem sinais de uso ou danos,
          juntamente com a embalagem original e todos os acessórios inclusos.
          Caso o produto esteja dentro das condiçōes mencionadas, você poderá
          escolher um novo item em troca ou receber um reembolso do valor pago,
          descontados os custos de frete, se aplicável.
          <br />
          <br />
          <br />
          <h2>Procedimento de troca ou devolução:</h2>
          <br />
          Para solicitar uma troca ou devolução, entre em contato conosco por
          telefone ou e-mail, informando o motivo da solicitação e o número do
          pedido. Nossa equipe fornecerá as instruçōes detalhadas sobre como
          proceder, incluindo o endereço para envio do produto, se necessário. É
          importante ressaltar que os custos de envio para troca ou devolução
          são de responsabilidade do cliente, a menos que o produto seja
          comprovadamente defeituoso. Estamos empenhados em oferecer um
          excelente atendimento do cliente e resolver qualquer problema de forma
          rápida e eficiente.
          <br />
          <br />
          Um forte abraço da Equipe <strong>Cleide & Fabi Presentes.</strong>
        </p>
      </ReplacementContainer>
      <SimpleFooter />
    </>
  );
}
