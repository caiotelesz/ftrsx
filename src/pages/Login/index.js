import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as userApi from "../../Api/userApi";

import "./index.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  async function Login() {
    let info = await userApi.logarConta(email, senha, navigate);

    return info;
  }
  
  return (
    <div class="content-login">
      <div class="fundo-inicial"></div>
      <div class="login-page">
        <div class="login-form">
          <h1>Login</h1>

          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e-mail"
          />
          <input
            type="password"
            onChange={(e) => setSenha(e.target.value)}
            placeholder="senha"
          />
          <button onClick={Login}>E n t r a r</button>

          <div className="create-login">
            <a href="/esqueceu_senha">
              <p>Esqueci a senha</p>
            </a>

            <a href="/cadastro">
              <p>Criar conta</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
