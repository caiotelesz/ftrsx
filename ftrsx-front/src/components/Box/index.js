import './index.scss';
import { API_ADDRESS } from '../../Api/constant';

export default function Box ({ item }) {
    const imgSrc = item.imagem ? `${API_ADDRESS}/${item.imagem.replace(/\\/g, '/')}` : 'assets/images/pecas/teeblack.png';

    return (
    <div className='card'>
        <div className='content'>
            <img src={imgSrc} alt='camiseta'/>
            <div>
                <h1 className={`${item.nome}`}>{item.nome ?? 't-shirt white'}</h1>
                <span>BRL {item.preco?.toFixed(2) ?? '180.00'}</span>
            </div>
        </div>
    </div>
    )
}