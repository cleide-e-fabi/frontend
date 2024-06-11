import * as svgs from "../../assets/svgs";
import { SimpleFooterStyles } from "./SimpleFooterStyles.styles";

export default function SimpleFooter() {
    return (
        <>
            <SimpleFooterStyles>
                <img className="simple-footer-logo" src={svgs.logo} />
                <div className="simple-footer-about">
                    <h1>SOBRE NOSSA LOJA:</h1>
                    <h2>
                        Na Cleide & Fabi Presentes, estamos empenhados em proporcionar uma
                        experiência única e memorável aos nossos clientes, valorizando cada
                        ocasião especial. Venha nos visitar e descubra o presente perfeito
                        para expressar seus sentimentos com amor e carinho.
                    </h2>
                </div>
                <div className="simple-footer-atendimento">
                <h1>SOBRE NOSSA LOJA:</h1>
                    <h2>
                        Na Cleide & Fabi Presentes, estamos empenhados em proporcionar uma
                        experiência única e memorável aos nossos clientes, valorizando cada
                        ocasião especial. Venha nos visitar e descubra o presente perfeito
                        para expressar seus sentimentos com amor e carinho.
                    </h2>
                </div>
            </SimpleFooterStyles>
        </>
    );
}