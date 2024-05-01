import './index.scss';
import Cabecalho from '../../components/Cabacalho';
import BoxVisualizacao from '../../components/BoxVisualizacao';

//import Footer from '../../components/Footer';

export default function Visualizacao () {
    return (
        <>
        <div>

            <section className='oi'>
            <div>
                <Cabecalho />
            </div>
            </section>

            <section className='oi2'>
                <BoxVisualizacao />
            </section>

            
                
        </div>
        
         </>  

        
    );
}