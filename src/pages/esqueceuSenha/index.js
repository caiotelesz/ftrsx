import Cabecalho from '../../components/Cabacalho';
import Footer from '../../components/Footer';
import './index.scss';

export default function esqueceuSenha() {

  return(
    <>
      <Cabecalho />

      <section className='senha-login'>

        <div>
          <h1>Pedir uma nova senha</h1>
          <p>Vamos te enviar um e-mail para poder alterar a sua senha.</p>  
          <input type="text" placeholder="e-mail" />
          <br/>
          <button>E n v i a rㅤe m a i l</button> 
        </div>
      </section>

        <Footer />
    </>
  )
}