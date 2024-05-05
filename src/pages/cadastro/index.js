import Cabecalho from '../../components/Cabacalho';
import Footer from '../../components/Footer';
import './index.scss';
import { Link } from 'react-router-dom';


export default function Cadastro() {
    return (
        <>
        <Cabecalho />
  
        <section className="page-cadastro">
          <div className='container-cadastro'>
            <h1>Cadastro Administrador</h1>

            <input type="text" placeholder="nome-completo" />
            <br />
            <input type="text" placeholder="e-mail" />
            <br />
            <input type='password' placeholder='senha' />
            <br />

            <Link to='/login'>
              <button>C r i a rㅤC o n t a</button>
            </Link>
            
          </div>
        </section>

        <Footer />
        </>
    );
}