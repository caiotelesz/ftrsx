//import Cabecalho from '../../components/Cabacalho';
import Footer from '../../components/Footer';
import BoxVerificacao from '../../components/BoxVerificacao';

import { Link } from 'react-router-dom'

import './index.scss';
import BoxVisualizacao from '../../components/BoxVisualizacao';
import Cabecalho from '../../components/Cabacalho';

export default function VerificarItens() {

    return (

        <div>

      <section className='secao'>
        <div>
        <Cabecalho/> 
        </div>
      </section>

      <section className='secaoVerificacao'>
        <div>
          <BoxVerificacao />
          <BoxVerificacao />
          <BoxVerificacao />
          <BoxVerificacao />
          <BoxVerificacao />
          <BoxVerificacao />
          <BoxVerificacao />
          <BoxVerificacao />
          
        </div>
        
      </section>
      
      <Footer />
      </div>
    );

}