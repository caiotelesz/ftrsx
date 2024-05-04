import { Link } from 'react-router-dom';
import './index.scss';

export default function Cabecalho () {

    return (
    <>
        <section className='page-header'>
        <div>
          <Link to="/">
          <img className='img-header' src='/assets/images/logo-header.png' alt="header logo"/>
          </Link>
        </div>

        <div className='componentes'>
          <a href='/vitrine'>
            <p>Shop All</p>
          </a>

          <a href='/'>
            <p>Home</p>
          </a>

          <a href='/contato'>
            <p>Contato</p>
          </a>

          <a href='https://www.instagram.com/featuresx/'>
            <p>Instagram</p>
          </a>
        </div>

        <div className='icons-header'>
          <div>
            <a href='/login'>
              <img src='/assets/images/profile.png' alt='profile' />
            </a>
          </div>

          <div>
            <a href='/'>
              <img src='/assets/images/search.png' alt='' />
            </a>
          </div>
        </div>
      </section>
    </>
    )
}