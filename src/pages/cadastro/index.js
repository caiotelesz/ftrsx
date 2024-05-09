import axios from 'axios';
import { useState } from 'react';

import './index.scss';

import Cabecalho from '../../components/Cabacalho';
import Footer from '../../components/Footer';


export default function Cadastro() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function criarContaAdm() {
    let url = 'http://localhost:5000/user';

    let corp = {
      "name": nome,
      "email": email,
      "password": senha
    }

    let r = await axios.post(url, corp);
    let info = r.data;

    alert('Cadastro Realizado!! seu id é: ' + info.id);

    setNome('');
    setEmail('');
    setSenha('');
  }

    return (
        <>
        <Cabecalho />
  
        <section className="page-cadastro">
          <div className='container-cadastro'>
            <h1>Cadastro Administrador</h1>

            <input type="text" value={nome} onChange={e => setNome(e.target.value)} placeholder="nome-completo" />
            <br />
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="e-mail" />
            <br />
            <input type='password' value={senha} onChange={ e => setSenha(e.target.value)} placeholder ='senha' />
            <br />

            <button onClick={criarContaAdm}>C r i a rㅤC o n t a</button>
            
          </div>
        </section>

        <Footer />
        </>
    );
}