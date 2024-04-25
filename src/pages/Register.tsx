import { useState } from "react";
import { Auth } from "../components/Auth/Auth.styles";
import { useNavigate} from "react-router-dom";
import axios from "axios";

export default function Register() {

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmePassword, setConfirmePassword] = useState("");
  const [usage, setUsage] = useState(false);
  const navigate = useNavigate();

  const data = {
    method: 'POST',
    url: 'https://accounts.cartpanda.com/api/shop-slug/customers',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer 123'
    },
    data: {
      email: email,
      first_name: name,
      last_name: lastName,
      phone: '+55' + phone,
      cpf: '512.516.999.44',
      cpn: '',
      house_number: '',
      tags: '',
      notes: ''
    }
  };

  function register(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setUsage(true);
    const promise = axios.request(data);
    promise.then(()=>{
      navigate("/");
    });
    promise.catch((err) => {
      alert(err.response.data.message);
      setUsage(false);
    });
  }

  return (
    <Auth>
      <form onSubmit={register}>
        <input 
        value={name} 
        type="text"
        placeholder="Nome"
        onChange={e => setName(e.target.value)}
        required
        disabled={usage}
        />
        <input 
        value={lastName} 
        type="text"
        placeholder="Sobrenome"
        onChange={e => setLastName(e.target.value)}
        required
        disabled={usage}
        />
        <input 
        value={phone} 
        type="text"
        placeholder="Celular"
        onChange={e => setPhone(e.target.value)}
        required
        disabled={usage}
        />
        <input 
        value={cpf} 
        type="text"
        placeholder="CPF"
        onChange={e => setCpf(e.target.value)}
        required
        disabled={usage}
        />
        <input 
        value={email} 
        type="email"
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
        required
        disabled={usage}
        />
        <input 
        value={password} 
        type="password"
        placeholder="Senha"
        onChange={e => setPassword(e.target.value)}
        required
        disabled={usage}
        />
        <input 
        value={confirmePassword} 
        type="password"
        placeholder="Confirme a senha"
        onChange={e => setConfirmePassword(e.target.value)}
        required
        disabled={usage}
        />
        <button>Entrar</button>
      </form>
    </Auth>
  );
}
