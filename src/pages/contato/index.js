import Cabecalho from '../../components/Cabacalho';
import Footer from '../../components/Footer';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';


export default function Contato() {
  return (
    <>
      <Cabecalho />

      <section className='page-contact'>
        <div>
          <h1>Contato</h1>

          <div>
            <FontAwesomeIcon icon={faLocationPin} />
            <p>Avenida sla oq, 123 - São Paulo - SP, 00000-000</p>
          </div>

          <div>
            <FontAwesomeIcon icon={faEnvelope} />
            <p>contato123@gmail.com</p>
          </div>

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