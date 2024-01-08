import { NavLink } from "react-router-dom";
import Gmlogo from "../../assets/logokasaB.svg";
import "../../styles/Header.scss"

function Header() {
  return (
    <header>
      <nav className="k-nav">
        <img src={Gmlogo} alt="logo-kasa" className="k-nav-logo"/>
        <div className="k-nav-link">
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/a-propos">À propos</NavLink>
        </div>
      </nav>
    </header>
  );
}
export default Header;
