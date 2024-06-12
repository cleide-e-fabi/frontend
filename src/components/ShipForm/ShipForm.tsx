import { useState } from "react";
import { ShipFormStyles } from "./ShipFormStyles.styles";
import axios from "axios";

export default function ShipForm() {

    const [invalidCep, setInvalidCep] = useState<boolean>(false);
    const [validCep, setValidCep] = useState<boolean>(false);
    const [cep, setCep] = useState("");

    const verifyCep = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

            const hasCep = 'cep' in response.data;

            console.log('olha a respostaaa', cep, response.data);

            if (hasCep) {
                setInvalidCep(false);
                setValidCep(true);
            } else {
                setInvalidCep(true);
                setValidCep(false);
            }
        } catch (error) {
            setInvalidCep(true);
            setValidCep(false);
            console.error('Erro ao buscar o CEP:', error);
        }
    };

    return (<>
        <ShipFormStyles >
            <div className="product-cep-search">
                <form className="product-cep-form" onSubmit={verifyCep}>
                    <input
                        type="number"
                        name="cep"
                        placeholder="Digite seu CEP"
                        value={cep}
                        onChange={e => setCep(e.target.value)}
                        maxLength={8}
                        required
                    ></input>
                    <button type="submit">{`Calcular`}</button>
                </form>
                <a
                    href="https://buscacepinter.correios.com.br/app/endereco/index.php"
                    target="blank"
                    className="product-cep-link"
                >
                    {`Não lembro o meu CEP`}
                </a>
            </div>
            {invalidCep && <p className="invalide-cep">Por favor, digite um CEP válido.</p>}
            {validCep &&
                <div className="free-ship-container">
                    <p className="free-ship-text">Frete Grátis</p>
                    <h1 className="free-ship-value">R$0,00</h1>
                </div>
            }
        </ShipFormStyles>
    </>);
}