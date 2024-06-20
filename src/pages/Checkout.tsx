import { CheckoutContainer } from "../components/Checkout/CheckoutContainer";
import Header from "../components/Home/Header/Header";
import SimpleFooter from "../components/SimpleFooter/SimpleFooter";
import { Title } from "../components/Title";
import { useState, useContext, useEffect } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import Cards from 'react-credit-cards-2';
import "react-credit-cards-2/dist/es/styles-compiled.css";
import UserContext from "../contexts/UserContext";
import { TbShoppingBagExclamation } from "react-icons/tb";


export default function () {

    const { cartProducts, setCartProducts } = useContext(UserContext) as any;
    const [cartLS, setCartLS] = useState<any[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [discount, setDiscount] = useState<number>(0);
    const [quotas, setQuotas] = useState<any[]>([]);
    const [selectedQuota, setSelectedQuota] = useState('');
    const fees = [0.1087, 0.1231, 0.1369, 0.1470, 0.1619, 0.1774, 0.1861, 0.2013, 0.2168];
    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<any>("");
    const [cpf, setCpf] = useState<string>("");
    const [cep, setCep] = useState<any>("");
    const [city, setCity] = useState<string>("");
    const [state, setState] = useState<string>("");
    const [num, setNum] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [district, setDistrict] = useState<string>("");
    const [comp, setComp] = useState<string>("");
    const [cardInfo, setCardInfo] = useState<any>({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
    });

    const handleSelectChange = (event: any) => {
        setSelectedQuota(event.target.value);
    };

    useEffect(() => {
        setCartLS(JSON.parse(localStorage.getItem('cartProducts') as any));

        let newTotalPrice: number = 0.00;
        let newDiscount: number = 0.00;
        let quotasArray = [];

        cartProducts.forEach((product: any) => {
            let diff = product.compare_at_price - product.price;
            newTotalPrice += product.price * product.amount;
            newDiscount += diff * product.amount;
        });

        for (let j = 1; j <= 12; j++) {
            if (j <= 3) {
                quotasArray.push((newTotalPrice / j).toFixed(2));
            } else {
                quotasArray.push(((newTotalPrice * fees[j - 4]) / j).toFixed(2));
            }
        }

        setTotalPrice(newTotalPrice);
        setDiscount(newDiscount);
        setQuotas(quotasArray);



    }, [cartProducts]);

    console.log('parcelas', quotas);

    const formatExpiry = (value: string) => {
        let formattedValue = value.replace(/\D/g, '');
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
                            maxLength={30}
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
                        <div className="select-container">
                            <label>Parcelas: </label>
                            <select onChange={handleSelectChange}>
                                {quotas.map((q: any, index) => (
                                    (index <= 2) ?
                                        <option value={index + 1} key={index}>
                                            {`${index + 1}x de R$ ${q}`} : {`${index + 1}x de R$ ${q}`}
                                        </option>
                                        :
                                        <option value={index + 1} key={index}>
                                            {`${index + 1}x de R$ ${q}`} : {`${index + 1}x de R$ ${q}*`}
                                        </option>
                                ))}
                            </select>
                        </div>
                    </div>

                </div>
                <div className="checkout-products">
                    {(cartLS.length !== 0) ?
                        <ul className="checkout-list">
                            {cartProducts.map((product: any) => (
                                <li key={product.id}>
                                    <h1>{product.title}</h1>
                                </li>
                            ))}
                        </ul>
                        :
                        <div className="empty-checkout">
                            <TbShoppingBagExclamation />
                            <h6>Jorge</h6>
                        </div>
                    }
                </div>
            </form>
        </CheckoutContainer>
            <SimpleFooter />
        </>
    );
}
