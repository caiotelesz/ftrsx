import './index.scss';
import { Link } from 'react-router-dom';


export default function Cadastro() {
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
  
        <section className="page-cadastro">
          <div className='container'>
            <h1>Cadastro Administrador</h1>

            <input type="text" placeholder="nome-completo" />
            <br />
            <input type="text" placeholder="e-mail" />
            <br />
            <input type='password' placeholder='senha' />
            <br />
            <button>C r i a rㅤC o n t a</button>
  
          </div>
        </section>
        </>
    );
}