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

        <Link to = '/' className='underline2'>
        <button>adicionar item</button>
        </Link>

        <Link to = '/verificacao' className='underline2'>
          <button>verificar item</button>
        </Link>
      </section>
      
      <Footer />
    </div>
  )
}