import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./index.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  async function logarConta() {
    try {
      let url = "http://localhost:5000/user/login";
      let r = await axios.post(url, { params: { email, senha } });
      let userData = r.data;

      if (userData && userData.loggedIn) {
        navigate("/funcao_admin");
      } else {
        alert("Verifique se o email ou senha está certo");
      }
    } catch (error) {
      alert("Verifique se o email ou senha está certo");
    }
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
          <button onClick={logarConta}>E n t r a r</button>

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
