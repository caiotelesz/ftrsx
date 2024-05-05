import Cabecalho from '../../components/Cabacalho';
import Footer from '../../components/Footer';
import './index.scss';

import { Link } from 'react-router-dom';

export default function Login() {
    return (
      <>
      <Cabecalho/>

      <section className="page-login">
        <div className='container-login'>
        
          <h1>Login</h1>

          <input type="text" placeholder="e-mail" />
          <br />
          <input type='password' placeholder='senha' />
          <br/>

          <Link to='/funcao_admin'>
            <button>E n t r a r</button>
          </Link>

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