import Box from '../../components/Box';
import Cabecalho from '../../components/Cabacalho';
import Footer from '../../components/Footer';
import './index.scss';
import { Link } from 'react-router-dom'

export default function Vitrine () {
  return (
    <>

      <section className='secao'>
        <div>
        <Cabecalho/> 
        </div>
      </section>
      

      <section className='secao2'>
         
        <div>
        <img src='/assets/images/frase-recortada.png' alt='frase'/>
        </div>
      </section>

      <section className='secao3'>
        <div>
          <Box />

        </div>
        
      </section>
      
      <Footer />
      </>
  );
}
