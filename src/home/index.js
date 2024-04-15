import './index.scss';
import { Link } from 'react-router-dom'

import Logo from "../components/images/logo-home.png";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <img className='image-home' src={Logo} alt="Logo-Home"/>

        <Link to='/vitrine'> vitrine </Link>
        <Link to='/contato'> contato </Link>

        <h1>FTRSX</h1>

      </header>
    </div>
  );
}
