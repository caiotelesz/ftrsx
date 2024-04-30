import './index.scss';
import imagem from './teste.png';

export default function Box (props) {

    return (
    <>
        <div className='card'>
            <img src={props.imagem ?? imagem} alt='camiseta'/>
            <div>
                <h1 className={`${props.nomeProduto}`}>{props.nome ?? 'camiseta'}</h1>
                <h2>laklkaalal</h2>
                <span>{props.preco ?? 'R$ 180.00'}</span>
            </div>
        </div>
    </>
    )
}