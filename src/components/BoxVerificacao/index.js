import './index.scss';
import { Link } from "react-router-dom";
export default function BoxVerificacao (props) {

    return (
    <div className='card-ver'>
        <div className='content'>
            <img src={props.imagem ?? 'assets/images/pecas/teeblack.png'} alt='camiseta'/>
            <div className='card-section'>
                <div>
                <h1 className={`${props.nomeProduto}`}>{props.nome ?? 't-shirt white'}</h1>
                <span>BRL {props.preco ?? '180.00'}</span>
                </div>
                <Link to='/criar_item' className='icon'>
                    <img src='/assets/images/botaoAlteracao.png' alt='Botão Alteração' />
                </Link>
            </div>
        </div>
    </div>
    )
}