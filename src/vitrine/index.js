import './index.scss';
import { Link } from 'react-router-dom'

export default function Vitrine () {
  return (
    <>
    <section className='page-header'>
        <div>
          <Link to='/'>
            <img className='img-header' src='/assets/images/logo-header.png' alt="header logo"/>
          </Link>
        </div>

        <div className='componentes'>
          <a href='/vitrine'>
            <p>shop all</p>
          </a>

          <a href='/'>
            <p>home</p>
          </a>

          <a href='/contato'>
            <p>contato</p>
          </a>

          <a href='https://www.instagram.com/featuresx/'>
            <p>Instagram</p>
          </a>
        </div>

        <div>

          
          <a href='/'>
            <img className='icons' src='/assets/images/search.png' alt='search' />
          </a>

          

          <a href='/login'>
            <img className='icons' src='/assets/images/profile.png' alt='profile' />
          </a>
        

          
          
        </div>
      </section>

      

      <section className='secao2'>
        <div>
        <img src='/assets/images/frase-recortada.png' alt='frase'/>
        </div>
      </section>

      <section className='secao3'>
        <div>
          
        </div>
      </section>
      
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
          
          <a href='/'>
            <p>Informações</p>
          </a>
          <a href='/'>
            <p>Política de Privacidade</p>
          </a>
          <a href='/'>
            <p>Termos de Uso</p>
          </a>
         
        </footer>
      </section>
      </>
  );
}
