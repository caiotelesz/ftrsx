import './index.scss';

export default function Box (props) {

    return (
    <div className='card'>
        <div className='content'>
            <img src={props.imagem ?? 'assets/images/pecas/teeblack.png'} alt='camiseta'/>
            <div>
                <h1 className={`${props.nomeProduto}`}>{props.nome ?? 't-shirt white'}</h1>
                <span>BRL {props.preco ?? '180.00'}</span>
            </div>
        </div>
    </div>
    )
}