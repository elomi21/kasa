import { NavLink } from "react-router-dom";
import Gmlogo from "../../assets/logokasaB.svg";
import "../../styles/index.scss"

function Header() {
  return (
    <header>
      <nav className="k-nav">
        <img src={Gmlogo} alt="logo-kasa" className="k-nav-logo" />
        <ul className="k-nav-link">
          <NavLink to="/">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/about">
            <li>À propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
