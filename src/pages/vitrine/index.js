import Box from '../../components/Box';
import Cabecalho from '../../components/Cabacalho';
import Footer from '../../components/Footer';
import './index.scss';
import { Link } from 'react-router-dom'

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
            <Box imagem= {'/assets/images/pecas/teste2.png'} nome = 'Hoodie trust' preco='320.00'/>
          </Link>
          
          <Link to='/visualizacao' className='underline'>
            <Box imagem= {'/assets/images/pecas/black-tee.png'} nome = 'tee basic black' preco = '129.00'/>
          </Link>
          
          <Link to='/visualizacao' className='underline'>
            <Box imagem= {'/assets/images/pecas/black-tee-featworld.png'} nome = 'tee featworld black' preco = '169.90'/>
          </Link>
          
          <Link to='/visualizacao' className='underline'>
            <Box imagem= {'/assets/images/pecas/hoodie-wolf-frente.png'} nome = 'Hoodie basic black' preco = '299.90'/>
          </Link>
          
          <Link to='/visualizacao' className='underline'>
            <Box imagem= {'/assets/images/pecas/hoodie-white-bg.png'} nome = 'Hoodie featworld white' preco = '319.90'/>
          </Link>
          
          <Link to='/visualizacao' className='underline'>
            <Box imagem= {'/assets/images/pecas/white-pants.png'} nome = 'pants featworld' preco = '189.90'/>
          </Link>
          
          <Link to='/visualizacao' className='underline'>
            <Box imagem= {'/assets/images/pecas/white-tee.png'}/>
          </Link>
          
          <Link to='/visualizacao' className='underline'>
            <Box imagem= {'/assets/images/pecas/tee-e.png'} nome = 'tee exterm black' preco = '169.90'/>
          </Link>
          
          <Link to='/visualizacao' className='underline'>
            <Box imagem= {'/assets/images/pecas/short.png'} nome = 'short feat black' preco = '199.90'/>
          </Link>
          
          <Link to='/visualizacao' className='underline'>
            <Box imagem= {'/assets/images/pecas/newtee.png'} nome = 'tee feat black' preco = '199.90'/>
          </Link>
          
          <Link to='/visualizacao' className='underline'>
            <Box imagem= {'/assets/images/pecas/drytee.png'} nome = 'tee featmock white' preco = '229.90'/>
          </Link>
          
          <Link to='/visualizacao' className='underline'>
            <Box imagem= {'/assets/images/pecas/teeblack.png'} nome = 'tee f black' preco = '189.90'/>
          </Link>
          
        </div>
        
      </section>
      
      <Footer />
      </div>
  );
}
