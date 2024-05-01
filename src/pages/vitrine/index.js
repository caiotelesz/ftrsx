import Box from '../../components/Box';
import Cabecalho from '../../components/Cabacalho';
import Footer from '../../components/Footer';
import './index.scss';
import { Link } from 'react-router-dom'

import image1 from './teste2.png'
import image2 from './black-tee.png'
import image3 from './black-tee-featworld.png';
import image4 from './hoodie-wolf.png';
import image5 from './hoodie-white.png';
import image6 from './white-pants.png';
import image7 from './black-tee.png';
import image8 from './hoodie-wolf-frente.png';
import image9 from './tee-e.png';
import image10 from './teebalck.png';
import image11 from './short.png';
import image12 from './peças/whitepants-bg.png';

export default function Vitrine () {
  return (
    <div>

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
        <img src='/assets/images/logo-header.png' alt='frase'/>
        </div>
      </section>

      <section className='secao4'>
        <div>
          <Link to='/visualizacao' className='underline'>
            <Box imagem= {image1} nome = 'Hoodie  ' preco='320.00'/>
          </Link>
          
          <Link to='/visualizacao' className='underline'>
            <Box imagem= {image2}/>
          </Link>
          
          <Link to='/visualizacao' className='underline'>
            <Box imagem= {image3}/>
          </Link>
          
          <Link to='/visualizacao' className='underline'>
            <Box imagem= {image4}/>
          </Link>
          
          <Link to='/visualizacao' className='underline'>
            <Box imagem= {image5}/>
          </Link>
          
          <Link to='/visualizacao' className='underline'>
            <Box imagem= {image6}/>
          </Link>
          
          <Link to='/visualizacao' className='underline'>
            <Box imagem= {image7}/>
          </Link>
          
          <Link to='/visualizacao' className='underline'>
            <Box imagem= {image8}/>
          </Link>
          
          <Link to='/visualizacao' className='underline'>
            <Box imagem= {image9}/>
          </Link>
          
          <Link to='/visualizacao' className='underline'>
            <Box imagem= {image10}/>
          </Link>
          
          <Link to='/visualizacao' className='underline'>
            <Box imagem= {image11}/>
          </Link>
          
          <Link to='/visualizacao' className='underline'>
            <Box imagem= {image12}/>
          </Link>
          
        </div>
        
      </section>
      
      <Footer />
      </div>
  );
}
