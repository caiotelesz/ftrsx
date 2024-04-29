import Cabecalho from '../../components/Cabacalho';
import Footer from '../../components/Footer';
import './index.scss';

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

      <Footer />
    </>
  );
}