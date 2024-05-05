//import Cabecalho from '../../components/Cabacalho';
import Footer from '../../components/Footer';
import BoxVerificacao from '../../components/BoxVerificacao';

import { Link } from 'react-router-dom'

import './index.scss';
import BoxVisualizacao from '../../components/BoxVisualizacao';

export default function VerificarItens() {

    return (

        <div>
            <section className='page-header'>
            <div>
            <Link to="/">
            <img className='img-header' src='/assets/images/logo-header.png' alt="header logo"/>
            </Link>
            </div>

            <div className='componentes'>
                <h1>ITENS</h1>
            </div>

            <div className='icons-header'>
            <div>
                <a href='/login'>
                <img src='/assets/images/profile.png' alt='profile' />
                </a>
            </div>

            <div>
                <a href='/'>
                <img src='/assets/images/search.png' alt='' />
                </a>
            </div>
            </div>
        </section>

            <section className='secao4'>
                <div>
                <Link to='/visualizacao' className='underline'>
                    <BoxVerificacao imagem= {'/assets/images/pecas/teste2.png'} nome = 'Hoodie trust' preco='320.00'/>
                </Link>
            
                </div>
            </section>

            <Footer />
        </div>
    );

}