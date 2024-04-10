// import { useContext, useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";
import { Auth } from "../components/Auth/Auth.styles";

export default function Login() {
  function login() {}

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [usage, setUsage] = useState(false)
  // const navigate = useNavigate();

  return (
    <Auth>
      <form onSubmit={login}>
        <input></input>
        <input></input>
        <button>Entrar</button>
      </form>
    </Auth>
  );
}
