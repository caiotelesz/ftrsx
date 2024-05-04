import './index.scss';

import Cabecalho from '../../components/Cabacalho';
import Footer from '../../components/Footer';

export default function funcaoAdm() {
  return (
    <div>
      <Cabecalho />

      <section className='section-adm'>
        <h1>Bem-vindo admin</h1>

        <button>adicionar itens</button>
        <button>verificar itens</button>
      </section>
      
      <Footer />
    </div>
  )
}