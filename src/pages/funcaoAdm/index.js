import './index.scss';

import Cabecalho from '../../components/Cabacalho';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

export default function funcaoAdm() {
  return (
    <div>
      <Cabecalho />

      <section className='section-adm'>
        <h1>Bem-vindo admin</h1>

        <button>adicionar itens</button>
        <Link to = '/verificacao' className='underline'>
          <button>verificar itens</button>
        </Link>
      </section>
      
      <Footer />
    </div>
  )
}