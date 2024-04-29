import Cabecalho from '../../components/Cabacalho';
import Footer from '../../components/Footer';
import './index.scss';
import { Link } from 'react-router-dom'

export default function Vitrine () {
  return (
    <>
      <Cabecalho/>    

      <section className='secao2'>
        <div>
        <img src='/assets/images/frase-recortada.png' alt='frase'/>
        </div>
      </section>

      <section className='secao3'>
        <div>
          
        </div>
      </section>
      
      <Footer />
      </>
  );
}
