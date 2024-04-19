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
            A B
          </a>
        </div>
      </section>
      
      <Link></Link>
      </>
  );
}
