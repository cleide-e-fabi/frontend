import { CheckoutContainer } from "../components/Checkout/CheckoutContainer";
import Header from "../components/Home/Header/Header";
import SimpleFooter from "../components/SimpleFooter/SimpleFooter";
import { Title } from "../components/Title";
import { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import Cards from 'react-credit-cards-2';
import "react-credit-cards-2/dist/es/styles-compiled.css";


export default function () {

    const [email, setEmail] = useState<any>("");
    const [name, setName] = useState<any>("");
    const [phone, setPhone] = useState<any>("");
    const [cpf, setCpf] = useState<any>("");
    const [cep, setCep] = useState<any>("");
    const [city, setCity] = useState<any>("");
    const [state, setState] = useState<any>("");
    const [num, setNum] = useState<any>("");
    const [address, setAddress] = useState<any>("");
    const [district, setDistrict] = useState<any>("");
    const [comp, setComp] = useState<any>("");
    const [cardInfo, setCardInfo] = useState<any>({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
    });

    const formatExpiry = (value: string) => {
        // Remove todos os caracteres não numéricos
        let formattedValue = value.replace(/\D/g, '');
        // Adiciona uma barra após os dois primeiros dígitos
        if (formattedValue.length > 2) {
            formattedValue = formattedValue.slice(0, 2) + '/' + formattedValue.slice(2, 4);
        }
        return formattedValue;
    };

    const handleInputChange = (evt: any) => {
        const { name, value } = evt.target;

        if (name === 'expiry') {
            const formattedValue = formatExpiry(value);
            setCardInfo((prev: any) => ({ ...prev, [name]: formattedValue }));
        } else {
            setCardInfo((prev: any) => ({ ...prev, [name]: value }));
        }
    }

    const handleInputFocus = (evt: any) => {
        setCardInfo((prev: any) => ({ ...prev, focus: evt.target.name }));
    }

    return (
        <><CheckoutContainer>
            <Header />
            <Title>
                <p>FINALIZAR COMPRA</p>
                <span className="line"></span>
            </Title>
            <form className="checkout-form">
                <div className="checkout-inputs">
                    <h1 className="form-title">{`Informações Pessoais`}</h1>
                    <h2 className="form-subtitle">{`Para quem devemos entregar o pedido?`}</h2>
                    <input
                        value={email}
                        type="email"
                        placeholder="E-mail"
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <input
                        value={name}
                        type="text"
                        placeholder="Nome Completo"
                        onChange={e => setName(e.target.value)}
                        required
                    />
                    <div className="personal-inputs">
                        <input
                            value={phone}
                            type="number"
                            placeholder="Celular"
                            onChange={e => setPhone(e.target.value)}
                            required
                        />
                        <input
                            value={cpf}
                            type="number"
                            placeholder="CPF"
                            onChange={e => setCpf(e.target.value)}
                            required
                        />
                    </div>
                    <h1 className="form-title">{`Informações de Entrega`}</h1>
                    <h2 className="form-subtitle">{`Para onde devemos entregar o pedido?`}</h2>
                    <input
                        value={cep}
                        type="number"
                        placeholder="CEP"
                        onChange={e => setCep(e.target.value)}
                        required
                        className="cep-input"
                    />
                    <div className="address-city">
                        <input
                            value={city}
                            type="text"
                            placeholder="Cidade"
                            onChange={e => setCity(e.target.value)}
                            required
                        />
                        <input
                            value={state}
                            type="text"
                            placeholder="Estado"
                            onChange={e => setState(e.target.value)}
                            required
                        />
                    </div>
                    <div className="address-comp">
                        <input
                            value={address}
                            type="text"
                            placeholder="Endereço"
                            onChange={e => setAddress(e.target.value)}
                            required
                        />
                        <input
                            value={num}
                            type="number"
                            placeholder="Número"
                            onChange={e => setNum(e.target.value)}
                            required
                        />
                    </div>
                    <div className="address-comp adress-last">
                        <input
                            value={district}
                            type="text"
                            placeholder="Bairro"
                            onChange={e => setDistrict(e.target.value)}
                            required
                        />
                        <input
                            value={comp}
                            type="text"
                            placeholder="Complemento"
                            onChange={e => setComp(e.target.value)}
                            required
                        />
                    </div>
                    <h1 className="form-title">{`Métodos de Envio`}</h1>
                    <h2 className="form-subtitle">{`Escolha o seu método de entrega abaixo`}</h2>
                    <div className="ship-mothod">
                        <FaCircleCheck className="ship-check" />
                        <h3>{`Frete Grátis`}</h3>
                        <h3>{`R$0,00`}</h3>
                    </div>
                    <h1 className="form-title">{`Métodos de Pagamento`}</h1>
                    <h2 className="form-subtitle">{`Escolha o seu método de pagamento abaixo`}</h2>
                    <div className="form-card">
                        <input
                            type="text"
                            name="name"
                            placeholder="Nome"
                            pattern='[a-z A-Z-]+'
                            value={cardInfo.name}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                            autoComplete="off"
                            required
                        />
                        <input
                            type="tel"
                            name="number"
                            placeholder="Número"
                            pattern='[\d| ]{16,22}'
                            maxLength={19}
                            value={cardInfo.number}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                            autoComplete="off"
                            required
                        />
                        <div className="card-details">
                            <Cards
                                number={cardInfo.number}
                                expiry={cardInfo.expiry}
                                cvc={cardInfo.cvc}
                                name={cardInfo.name}
                                focused={cardInfo.focus}
                            />
                            <div className="card-comp">
                                <input
                                    type="tel"
                                    name="expiry"
                                    placeholder="Validade"
                                    pattern='\d\d/\d\d'
                                    maxLength={5}
                                    value={cardInfo.expiry}
                                    onChange={handleInputChange}
                                    onFocus={handleInputFocus}
                                    required
                                    autoComplete="off"
                                    className="input-card-comp"
                                />
                                <input
                                    type="tel"
                                    name="cvc"
                                    placeholder="CVV"
                                    pattern='\d{3}'
                                    maxLength={3}
                                    value={cardInfo.cvc}
                                    onChange={handleInputChange}
                                    onFocus={handleInputFocus}
                                    required
                                    autoComplete="off"
                                    className="input-card-comp"
                                />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="checkout-products">
                    pindamoiangaba
                </div>
            </form>
        </CheckoutContainer>
            <SimpleFooter />
        </>
    );
}
