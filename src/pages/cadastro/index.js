import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import * as userApi from "../../Api/userApi";

import './index.scss';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  async function SignUp() {
    let info = await userApi.criarContaAdm(nome, email, senha, navigate);

    return info;
  }

  return (
    <div className="content-signup">
      <div className="fundoinicial"></div>
      <div className="signup-page">
        <div className="signup-form">
          <h1>Criar Conta</h1>
          <input type="text" value={nome} onChange={e => setNome(e.target.value)} placeholder="nome-completo" />
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="e-mail" />
          <input type="password" value={senha} onChange={e => setSenha(e.target.value)} placeholder="senha" />
          <button onClick={SignUp}>C r i a rㅤC o n t a</button>
          <div className="create-login">
            <Link to="/login">
              <p>Já tem uma conta? Entrar</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
