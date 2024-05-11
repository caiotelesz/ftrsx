import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Cabecalho from '../../components/Cabacalho';
import Footer from '../../components/Footer';
import './index.scss';


export default function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    async function logarConta() {
      let url = 'http://localhost:5000/user_login';

      try {
        let r = await axios.post(url, {email, senha});
        let userData = r.data;

        navigate(`/funcao_admin/${userData.userId}`);
      } catch (error) {
        alert('Verifique se o email ou senha está certo');
      }
    }
    return (
      <>
      <Cabecalho/>

      <section className="page-login">
        <div className='container-login'>
        
          <h1>Login</h1>

          <input type="text" onChange={e => setEmail(e.target.value)} placeholder="e-mail" />
          <br />
          <input type='password' onChange={e => setSenha(e.target.value)} placeholder='senha' />
          <br/>

            <button onClick={logarConta}>E n t r a r</button>

          <div className='create-login'>
            <a href='/esqueceu_senha'>
              <p>Esqueci a senha</p>
            </a>

            <a href='/cadastro'>
              <p>Criar conta</p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      </>
    );
  }