import BoxVerificacao from '../../components/BoxVerificacao';

import Cabecalho from '../../components/Cabacalho';
import Footer from '../../components/Footer';

import './index.scss';

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