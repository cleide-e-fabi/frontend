import * as svgs from '../../../assets/svgs';
import { CommentsSectionStyles } from './CommentsSection.styles';

export default function CommentsSection() {
  return (
    <>
      <CommentsSectionStyles>
        <img className="wave" src={svgs.wave} />
        <p className="comment-title">
          {'Deixe seu comentário'} <br />
          <strong>{'A Cleide e Fabi quer saber!'}</strong>
        </p>
        <ul className="comment-cards">
          <li className="comment-card">
            <ul className="comment-stars">
              <li className="star">{`★`}</li>
              <li className="star">{`★`}</li>
              <li className="star">{`★`}</li>
              <li className="star">{`★`}</li>
              <li className="star">{`★`}</li>
            </ul>
            <h6 className="product-name">{`Cesta Café da Manhã`}</h6>
            <h5 className="comment-text">{`Deu tudo certo. Vcs são maravilhosas!`}</h5>
            <div className="comment-date">{`23/09/23`}</div>
          </li>
          <li className="comment-card">
            <ul className="comment-stars">
              <li className="star">{`★`}</li>
              <li className="star">{`★`}</li>
              <li className="star">{`★`}</li>
              <li className="star">{`★`}</li>
              <li className="star">{`★`}</li>
            </ul>
            <h6 className="product-name">{`Kit Balde de Cerveja do São Paulo`}</h6>
            <h5 className="comment-text">{`Meu marido amou o presente. Muito Obrigada!`}</h5>
            <div className="comment-date">{`12/09/23`}</div>
          </li>
          <li className="comment-card">
            <ul className="comment-stars">
              <li className="star">{`★`}</li>
              <li className="star">{`★`}</li>
              <li className="star">{`★`}</li>
              <li className="star">{`★`}</li>
              <li className="star">{`★`}</li>
            </ul>
            <h6 className="product-name">{`Pelúcia Stitch com Bombons!`}</h6>
            <h5 className="comment-text">{`Linda a pelúcia e chegou muito rápido.`}</h5>
            <div className="comment-date">{`07/06/23`}</div>
          </li>
        </ul>
      </CommentsSectionStyles>
    </>
  );
}
