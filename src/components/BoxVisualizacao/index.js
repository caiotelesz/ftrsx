import './index.scss';

import imagem from './camiseta-teste.png';
import imagem2 from './newtee-removebg2.png';

import tamanho from './tamanhos.png';

export default function BoxVisualizacao(props) {
  return(

    <div className='container'>
        <div className='box1'>
        
        <img src={imagem2} alt='camiseta' />

        <img src={imagem} alt='camiseta preta costas' />

        </div>
        <div className='box2'>
          <h1 className={`${props.nomeProduto}`}>
            {props.nome ?? 'Black shirt Heavy Tee'}
          </h1>

          <p>
          Confeccionada em Suedine vermelho 100% algodão 220GSM (alta gramatura) na modelagem FEATURESX, nossa t-shirt conta com estampa frontal e traseira em silk. Considere um encolhimento natural de 5%, consultar tabela de medidas.
          </p>

          <h2>Cor: </h2>
          <button className='botaoCor'> PRETO </button>
          
          <div className='botaoTamanho'>
            <h2>Tamanho: </h2>
            <button> P </button>
            <button> M </button>
            <button> G </button>
            <button> GG </button>
          </div>
          
          <div className='botaoValor'>
            <h2>BRL 80.00</h2>

            <button>COMPRAR VIA WHATSAPP</button>
          </div>

          <img src={tamanho} alt='tamanho-camiseta' />
        </div>
    </div>
  )
}