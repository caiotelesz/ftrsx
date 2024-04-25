import Cabecalho from '../../components/Cabacalho';
import './index.scss';
import { Link } from 'react-router-dom';


export default function Cadastro() {
    return (
        <>
        <Cabecalho />
  
        <section className="page-cadastro">
          <div className='container'>
            <h1>Cadastro Administrador</h1>

            <input type="text" placeholder="nome-completo" />
            <br />
            <input type="text" placeholder="e-mail" />
            <br />
            <input type='password' placeholder='senha' />
            <br />
            <button>C r i a rㅤC o n t a</button>
  
          </div>
        </section>

        <section className='page-footer'>
        <div>
          <Link to="/">
            <img className='img-footer' src='/assets/images/logo-header.png' alt="header logo"/>
          </Link>
        </div>

        <footer>
          <div>
            <p>contato@gmail.com</p>
            <p>(11) 4002-8922 </p>
            <p>CNPJ 00.000.000/0000-00</p>
          </div>
          
          <a href='/'>
            <p>Informações</p>
          </a>
          <a href='/'>
            <p>Política de Privacidade</p>
          </a>
          <a href='/'>
            <p>Termos de Uso</p>
          </a>
         
        </footer>
      </section>
        </>
    );
}