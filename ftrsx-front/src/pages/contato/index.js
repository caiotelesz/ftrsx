import Cabecalho from '../../components/Cabacalho';
import Footer from '../../components/Footer';
import { useState } from 'react';

import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';


export default function Contato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');

  function EnviarMensagem() {
    if (nome && email && telefone && mensagem) {
      alert("Mensagem enviada");
      setNome('');
      setEmail('');
      setTelefone('');
      setMensagem('');
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

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

          <input type="text" placeholder='Nome Completo' value={nome} onChange={(e) => setNome(e.target.value)} />
          <br/>
          <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <br/>
          <input type='text' placeholder='Telefone' value={telefone} onChange={(e) => setTelefone(e.target.value)} />
          <br/>
          <textarea placeholder='Mensagem' className='msg-contact' value={mensagem} onChange={(e) => setMensagem(e.target.value)} />

          <br />

          <button onClick={EnviarMensagem}>E N V I A R</button>
        </div>
      </section>

      <Footer />
    </>
  );
}