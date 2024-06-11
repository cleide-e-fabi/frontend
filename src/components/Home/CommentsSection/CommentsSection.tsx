import * as svgs from "../../../assets/svgs";
import { CommentsSectionStyles } from "./CommentsSection.styles";

export default function CommentsSection() {
    return (
        <>
       <CommentsSectionStyles>
        <img className="wave" src={svgs.wave} />
        <p className="comment-title">
          {"Deixe seu comentário"} <br />
          <strong>{"A Cleide e Fabi quer saber!"}</strong>
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
            <h6 className="product-name">{`Nome do produto`}</h6>
            <h5 className="comment-text">{`Deu tudo certo. Vcs são maravilhosas!`}</h5>
            <div className="comment-date">{`03/02/24`}</div>
          </li>
          <li className="comment-card">
            <ul className="comment-stars">
              <li className="star">{`★`}</li>
              <li className="star">{`★`}</li>
              <li className="star">{`★`}</li>
              <li className="star">{`★`}</li>
            </ul>
            <h6 className="product-name">{`Nome do produto`}</h6>
            <h5 className="comment-text">{`Deu tudo certo. Vcs são maravilhosas!`}</h5>
            <div className="comment-date">{`03/02/24`}</div>
          </li>
          <li className="comment-card">
            <ul className="comment-stars">
              <li className="star">{`★`}</li>
              <li className="star">{`★`}</li>
              <li className="star">{`★`}</li>
            </ul>
            <h6 className="product-name">{`Nome do produto`}</h6>
            <h5 className="comment-text">{`Deu tudo certo. Vcs são maravilhosas!`}</h5>
            <div className="comment-date">{`03/02/24`}</div>
          </li>
        </ul>
      </CommentsSectionStyles>
        </>
    );
}