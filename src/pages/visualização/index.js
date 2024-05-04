import './index.scss';
import Cabecalho from '../../components/Cabacalho';
import BoxVisualizacao from '../../components/BoxVisualizacao';

import Footer from '../../components/Footer';

export default function Visualizacao () {
    return (
        <div>
            <Cabecalho />

            <section className='box-visu'>
                <BoxVisualizacao />
            </section>

            <Footer />        
        </div>
    );
}