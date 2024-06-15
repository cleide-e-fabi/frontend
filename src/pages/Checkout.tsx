import { CheckoutContainer } from "../components/Checkout/CheckoutContainer";
import Header from "../components/Home/Header/Header";
import { useState } from "react";
import SimpleFooter from "../components/SimpleFooter/SimpleFooter";
import { FaCircleCheck } from "react-icons/fa6";

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
    const [usage, setUsage] = useState<any>("");

    return (
        <><CheckoutContainer>
            <Header />
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
                        disabled={usage}
                    />
                    <input
                        value={name}
                        type="text"
                        placeholder="Nome Completo"
                        onChange={e => setName(e.target.value)}
                        required
                        disabled={usage}
                    />
                    <div className="personal-inputs">
                        <input
                            value={phone}
                            type="number"
                            placeholder="Celular"
                            onChange={e => setPhone(e.target.value)}
                            required
                            disabled={usage}
                        />
                        <input
                            value={cpf}
                            type="number"
                            placeholder="CPF"
                            onChange={e => setCpf(e.target.value)}
                            required
                            disabled={usage}
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
                        disabled={usage}
                        className="cep-input"
                    />
                    <div className="address-city">
                        <input
                            value={city}
                            type="text"
                            placeholder="Cidade"
                            onChange={e => setCity(e.target.value)}
                            required
                            disabled={usage}
                        />
                        <input
                            value={state}
                            type="text"
                            placeholder="Estado"
                            onChange={e => setState(e.target.value)}
                            required
                            disabled={usage}
                        />
                    </div>
                    <div className="address-comp">
                        <input
                            value={address}
                            type="text"
                            placeholder="Endereço"
                            onChange={e => setAddress(e.target.value)}
                            required
                            disabled={usage}
                        />
                        <input
                            value={num}
                            type="number"
                            placeholder="Número"
                            onChange={e => setNum(e.target.value)}
                            required
                            disabled={usage}
                        />
                    </div>
                    <div className="address-comp adress-last">
                        <input
                            value={district}
                            type="text"
                            placeholder="Bairro"
                            onChange={e => setDistrict(e.target.value)}
                            required
                            disabled={usage}
                        />
                        <input
                            value={comp}
                            type="text"
                            placeholder="Complemento"
                            onChange={e => setComp(e.target.value)}
                            required
                            disabled={usage}
                        />
                    </div>
                    <h1 className="form-title">{`Métodos de Envio`}</h1>
                    <h2 className="form-subtitle">{`Escolha o seu método de entrega abaixo`}</h2>
                    <div className="ship-mothod">
                        <FaCircleCheck className="ship-check"/>
                        <h3>{`Frete Grátis`}</h3>
                        <h3>{`R$0,00`}</h3>
                    </div>
                    <h1 className="form-title">{`Métodos de Pagamento`}</h1>
                    <h2 className="form-subtitle">{`Escolha o seu método de pagamento abaixo`}</h2>
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