import "./index.scss";
import { Link } from "react-router-dom";

import Logo from "../components/images/logo-home.png";
import Logoheader from "../components/images/logo-header.png";

export default function App() {
  return (
    <div className="App">
      <header className>
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img className="logo-img" src={Logoheader} alt="Logo" />
            </Link>
          </div>

          <div className="menu">
            <nav>
              <a href="/vitrine">shop all</a>
              <a href="/">home</a>
              <a href="/contato">contato</a>
              <a href="https://www.instagram.com/featuresx/">Instagram</a>
            </nav>
          </div>
          <div className="icones"></div>
        </div>
      </header>

      
        <Link to="/vitrine">
          <img className="image-home" src={Logo} alt="Logo-Home" />
        </Link>
  
    </div>
  );
}
