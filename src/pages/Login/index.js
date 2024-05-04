import Cabecalho from '../../components/Cabacalho';
import Footer from '../../components/Footer';
import './index.scss';

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
          <button>E n t r a r</button>

          <div className='create-login'>
            <a href='/esqueceuSenha'>
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