import './index.scss';

import Cabecalho from '../../components/Cabacalho';
import Footer from '../../components/Footer'

/* 
<input type="file" accept="image, text" name="file" onChange={e=>setImage(e.target.files[0])} />
<button>atualizar</button> 
*/
export default function CriarItem() {

  return(
    
    <div className='page-criar'>
      <Cabecalho />

        <div className='container-criar'>
          <div className='primeiraCaixa'>   
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
          </div>


          <div className='segunda-caixa'>
            <label htmlFor="imagemInput">Alterar Imagem</label>
            <input type="file" accept="image, text" id="imagemInput" name="file" style={{display: 'none'}} />
            <button>Atualizar</button>
          </div>
          <div className='terceira-caixa'>
            <button>Adicionar Roupa</button>
          </div>
        </div>
      <Footer />
    </div>
  )
}