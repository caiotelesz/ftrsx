import { Link } from 'react-router-dom';
import './index.scss';

export default function footer(){
  return(
      <section className='page-footer'>
        <div>
          <Link to="/">
            <img className='img-footer' src='/assets/images/logo-header.png' alt="header logo"/>
          </Link>
        </div>

        <footer>
          <div>
            <p>contato@gmail.com</p>
            <p>(11) 4002-8922 </p>
            <p>CNPJ 00.000.000/0000-00</p>
          </div>
          
          <a href='/contato'>
            <p>Informações</p>
          </a>
          <a href='/privacidade'>
            <p>Política de Privacidade</p>
          </a>
          <a href='/termos_de_uso'>
            <p>Termos de Uso</p>
          </a>
         
        </footer>
      </section>
  )
}