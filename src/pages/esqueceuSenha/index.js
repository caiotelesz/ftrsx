import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as userApi from "../../Api/userApi";

import "./index.scss";

export default function EsqueceuSenha() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  async function ChangePassword() {
      let info = await userApi.alterarSenha(email, newPassword, navigate);
      setMessage(message);
  }
  
  return (
    <div className="content-password">
      <div className="fundo-inicial"></div>
      <div className="password-page">
        <div className="password-form">
          <h1>Nova Senha</h1>
          <p>Digite seu email e sua nova senha</p>
          <input
            type="email"
            placeholder="e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="senha"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button onClick={ChangePassword}>M u d a r ㅤs e n h a</button>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
}
