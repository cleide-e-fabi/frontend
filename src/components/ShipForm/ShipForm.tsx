import { useState } from 'react';
import { ShipFormStyles } from './ShipFormStyles.styles';
import axios from 'axios';
import loading from '../../assets/anim/loading.webp';
import { addDays, format } from 'date-fns';

export default function ShipForm() {
  const [invalidCep, setInvalidCep] = useState<boolean>(false);
  const [validCep, setValidCep] = useState<boolean>(false);
  const [showLoading, setShowLoading] = useState<boolean>(false);
  const [cep, setCep] = useState('');
  const today = new Date();
  const date15 = addDays(today, 12);
  const date30 = addDays(today, 14);
  const formattedDate15 = format(date15, 'dd/MM');
  const formattedDate30 = format(date30, 'dd/MM');

  const verifyCep = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowLoading(true);

    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

      const hasCep = 'cep' in response.data;

      if (hasCep) {
        setInvalidCep(false);
        setValidCep(true);
        setShowLoading(false);
      } else {
        setInvalidCep(true);
        setValidCep(false);
        setShowLoading(false);
      }
    } catch (error) {
      setInvalidCep(true);
      setValidCep(false);
      setShowLoading(false);
    }
  };

  return (
    <>
      <ShipFormStyles>
        <div className="product-cep-search">
          <form className="product-cep-form" onSubmit={verifyCep}>
            <input
              type="number"
              name="cep"
              placeholder="Digite seu CEP"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              maxLength={8}
              required
            ></input>
            <button type="submit">
              {`Calcular`}
              {showLoading ? (
                <img className="loading-gif" src={loading} alt="loading..." />
              ) : (
                <></>
              )}
            </button>
          </form>
          <a
            href="https://buscacepinter.correios.com.br/app/endereco/index.php"
            target="blank"
            className="product-cep-link"
          >
            {`Não lembro o meu CEP`}
          </a>
        </div>
        {invalidCep && (
          <p className="invalide-cep">Por favor, digite um CEP válido.</p>
        )}
        {validCep && (
          <p className="free-ship-container">
            {`Entrega estimada entre os dias ${formattedDate15} e ${formattedDate30}`}
          </p>
        )}
      </ShipFormStyles>
    </>
  );
}
