import './index.scss';

import Cabecalho from '../../components/Cabacalho';
import Footer from '../../components/Footer'

export default function CriarItem() {

  return(
    <div className='page-editar'>
      <Cabecalho />

        <div className='container-editar'>
          <div>
            <h2>Nome: </h2>
            <input type='text' />
          </div>
          <div>
            <h2>Descrição: </h2>
            <input type='text' />
          </div>
          <div>
            <h2>Modelo: </h2>
            <input type='text' />
          </div>
          <div>
            <h2>Preço: </h2>
            <input type='text' />
          </div>
          <div>
            <h2>Cor: </h2>
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

          <button>Adicionar Imagem</button>
            
          <button>Criar Item</button>
        </div>
      <Footer />
    </div>
  )
}