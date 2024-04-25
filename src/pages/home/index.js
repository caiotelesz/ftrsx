import "./index.scss";
import { Link } from "react-router-dom";

// import Logo from "/assets/images/logo-home.png";


export default function App() {
  return (
    <div className="App">
        <Link to="/vitrine">
          <img className="image-home" src='/assets/gifs/giflogo.gif' alt="Logo-Home" />
        </Link>
    </div>
  );
}
