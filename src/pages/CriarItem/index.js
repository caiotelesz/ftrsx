import './index.scss';

import Cabecalho from '../../components/Cabacalho';
import Footer from '../../components/Footer'

export default function CriarItem() {

  return(
    <div className='page-criar'>
      <Cabecalho />

        <div className='container-criar'>
          <div>
            <h2>Nome: </h2>
            <input type='text' />
          </div>
          <div>
            <h2>Descrição: </h2>
            <input type='text' />
          </div>
          <div>
            <h2>Preço: </h2>
            <input type='text' />
          </div>
          <div>
            <h2>Tamanho: </h2>
            <input type='text' />
          </div>
          <div>
            <h2>Material: </h2>
            <input type='text' />
          </div>

          <button>
          <input type="file" accept="image, text" name="file"></input>
          </button>
            
          <button>Criar Item</button>
        </div>
      <Footer />
    </div>
  )
}