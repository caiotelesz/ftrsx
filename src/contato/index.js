import './index.scss';

import logo from "../components/images/logo-header.png"

export default function Contato() {
  return (
    <>
      <section className='page-header'>
        <div>
          <img className='img-header' src={logo} alt="header logo"/>
        </div>

        <div className='componentes'>
          <a href='#'>
            <p>shop all</p>
          </a>

          <a href='#'>
            <p>home</p>
          </a>

          <a href='#'>
            <p>contato</p>
          </a>

          <a href='#'>
            <p>Instagram</p>
          </a>
        </div>

        <div>
          <a href='#'>
            A B
          </a>
        </div>
      </section>

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
    </>
  );
}