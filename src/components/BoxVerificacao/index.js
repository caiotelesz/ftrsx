import './index.scss';
import { Link } from "react-router-dom";  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { API_ADDRESS } from '../../Api/constant';

export default function BoxVerificacao ({ item }) {
    const imgSrc = item.imagem ? `${API_ADDRESS}/${item.imagem.replace(/\\/g, '/')}` : 'assets/images/pecas/teeblack.png';

    return (
    <div className='card-ver'>
        <div className='content'>
            <img src={imgSrc} alt='camiseta'/>
            <div className='card-section'>
                <div>
                <h1 className={`${item.nome}`}>{item.nome ?? 't-shirt white'}</h1>
                <span>BRL {item.preco?.toFixed(2) ?? '180.00'}</span>
                </div>
                <Link to='/editar_item' className='icon'>
                    <FontAwesomeIcon icon={faPenToSquare} className="custom-penIcon" />
                </Link>
            </div>
        </div>
    </div>
    )
}