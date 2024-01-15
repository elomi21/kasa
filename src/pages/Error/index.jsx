import { Link } from "react-router-dom";
import "../../styles/index.scss"

function Error() {
  return (
    <>
      <div className="container-k-e">
        <h1 className="k-e-title">404</h1>
        <p className="k-e-subtitle">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="k-e-link">Retourner sur la page d’accueil</Link>
      </div>
    </>
  );
}

export default Error;
