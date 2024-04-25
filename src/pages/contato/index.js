import Cabecalho from '../../components/Cabacalho';
import './index.scss';
import { Link } from 'react-router-dom';

// import logo from "/assets/images/logo-header.png"

export default function Contato() {
  return (
    <>
      <Cabecalho />

      <section className='page-contact'>
        <div>
          <h1>Contato</h1>
          <p>Avenida sla oq, 123 - São Paulo - SP, 00000-000</p>

          <p>contato123@gmail.com</p>

          <input type="text" placeholder='Nome Completo'/>
          <br/>
          <input type="text" placeholder='Email' />
          <br/>
          <input type='text' placeholder='Telefone' />
          <br/>
          <textarea placeholder='Mensagem' className='msg-contact'/>

          <br />

          <button>E N V I A R</button>
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