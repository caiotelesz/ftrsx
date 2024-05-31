import { useNavigate } from 'react-router-dom';
import './index.scss';
import { API_ADDRESS } from '../../Api/constant';

export default function Box ({ item }) {
    const nav = useNavigate();
    const imgSrc = item.img ? `${API_ADDRESS}/${item.img.replace(/\\/g, '/')}` : 'assets/images/pecas/teeblack.png';

    function roupaDetalhe() {
      nav('/visualizacao/' + item.id);
    }

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