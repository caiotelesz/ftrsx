import "./index.scss";
import { Link } from "react-router-dom";

import Logo from "../components/images/logo-home.png";
import logo from "../components/images/logo-header.png";

export default function App() {
  return (
    <div className="App">
      <section className='page-header'>
        <div>
          <Link to="/">
            <img className='img-header' src={ logo } alt="header logo"/>
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

      
        <Link to="/vitrine">
          <img className="image-home" src={Logo} alt="Logo-Home" />
        </Link>
  
    </div>
  );
}
