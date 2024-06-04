import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss';
import { Link } from 'react-router-dom';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  async function criarContaAdm() {
    let url = 'http://191.235.120.237:5000/user/register';
    let corp = {
      name: nome,
      email: email,
      password: senha
    };

    try {
      let r = await axios.post(url, corp);
      let info = r.data;

      alert('Cadastro Realizado! Seu ID é: ' + info.id);

      setNome('');
      setEmail('');
      setSenha('');

      navigate('/login');
    } catch (error) {
      alert('Erro ao criar conta. Tente novamente.');
    }
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
          <button onClick={criarContaAdm}>C r i a rㅤC o n t a</button>
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
