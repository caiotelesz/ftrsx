import Box from '../../components/Box';
import Cabecalho from '../../components/Cabacalho';
import Footer from '../../components/Footer';
import './index.scss';
import { Link } from 'react-router-dom'

import image1 from './teste2.png'
import image2 from './black-tee.png'
import image3 from './black-tee-featworld.png';
import image4 from './hoodie-wolf2.jpg';
import image5 from './hoodie-white.png';
import image6 from './white-pants.png';
import image7 from './blacktee.jpg';
import image8 from './hoodie-wolf-frente.jpg';
import image9 from './tee-e.jpg';
import image10 from './teebalck.jpg';
import image11 from './short.jpg';
import image12 from './newtee.jpg';

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
          <Box imagem= {image1}/>
          <Box imagem= {image2}/>
          <Box imagem= {image3}/>
          <Box imagem= {image4}/>
          <Box imagem= {image5}/>
          <Box imagem = {image6}/>
          <Box imagem = {image7}/>
          <Box imagem = {image8}/>
          <Box imagem = {image9}/>
          <Box imagem = {image10}/>
          <Box imagem = {image11}/>
          <Box imagem = {image12}/>
          

        </div>
        
      </section>
      
      <Footer />
      </div>
  );
}
