
import { Link } from "react-router-dom";

function Error() {
    return (
      <div>
        <h1>404</h1>
        <Link to="/">Oups! La page que vous demandez n'existe pas.</Link>
      </div>
    );
}
 
export default Error