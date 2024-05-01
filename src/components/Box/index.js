import './index.scss';
import imagem from './camiseta-teste.png';

export default function Box (props) {

    return (
    <div className='card'>
        <div className='content'>
            <img src={props.imagem ?? imagem} alt='camiseta'/>
            <div>
                <h1 className={`${props.nomeProduto}`}>{props.nome ?? 't-shirt white'}</h1>
                <span>{props.preco ?? 'R$ 180.00'}</span>
            </div>
        </div>
    </div>

    // <section className='section-card'>
    //     <div className='card'>
    //         <img src={props.imagem ?? imagem} alt = 'camiseta' />
    //         <div>
    //             <h1 className={`${props.nomeProduto}`}>{props.nome ?? 't-shirt white'}</h1>
    //             <p>{props.preco ?? 'R$ 180.00'}</p>
    //         </div>
    //     </div>
    // </section>
    )
}