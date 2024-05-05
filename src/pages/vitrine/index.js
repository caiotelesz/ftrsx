import Box from '../../components/Box';
import Cabecalho from '../../components/Cabacalho';
import Footer from '../../components/Footer';
import './index.scss';
import { Link } from 'react-router-dom'

// import image6 from './white-pants.png';
// import image7 from './black-tee.png';
// import image8 from './hoodie-wolf-frente.png';
// import image9 from './tee-e.png';
// import image10 from './teebalck.png';
// import image11 from './short.png';
// import image12 from './peças/whitepants-bg.png';

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
            <Box imagem= {'/assets/images/pecas/teste2.png'} nome = 'Hoodie' preco='320.00'/>
          </Link>
          
          <Link to='/visualizacao' className='underline'>
            <Box imagem= {'/assets/images/pecas/black-tee.png'}/>
          </Link>
          
          <Link to='/visualizacao' className='underline'>
            <Box imagem= {'/assets/images/pecas/black-tee-featworld.png'}/>
          </Link>
          
          <Link to='/visualizacao' className='underline'>
            <Box imagem= {'/assets/images/pecas/hoodie-wolf-frente.png'}/>
          </Link>
          
          <Link to='/visualizacao' className='underline'>
            <Box imagem= {'/assets/images/pecas/hoodie-white.png'}/>
          </Link>
          
          <Link to='/visualizacao' className='underline'>
            <Box imagem= {'/assets/images/pecas/white-pants.png'}/>
          </Link>
          
          <Link to='/visualizacao' className='underline'>
            <Box imagem= {'/assets/images/pecas/hoodie-wolf-frente.png'}/>
          </Link>
          
          <Link to='/visualizacao' className='underline'>
            <Box imagem= {'/assets/images/pecas/tee-e.png'}/>
          </Link>
          
          <Link to='/visualizacao' className='underline'>
            <Box imagem= {'/assets/images/pecas/short.png'}/>
          </Link>
          
          <Link to='/visualizacao' className='underline'>
            <Box imagem= {'/assets/images/pecas/newtee.png'}/>
          </Link>
          
          <Link to='/visualizacao' className='underline'>
            <Box imagem= {'/assets/images/pecas/drytee.png'}/>
          </Link>
          
          <Link to='/visualizacao' className='underline'>
            <Box imagem= {'/assets/images/pecas/teebalck.png'}/>
          </Link>
          
        </div>
        
      </section>
      
      <Footer />
      </div>
  );
}
