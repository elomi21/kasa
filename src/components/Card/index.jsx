import { NavLink } from "react-router-dom";
import "../../styles/index.scss";
import Dataloc from "../../servay/dataloc.json";

const dataloc = Dataloc;

function Card() {
  return (
    <div className="container-k-gallery">
      {dataloc.map((data) => (
        <NavLink to={`/rental-description/${data.id}`} key={data.id}>
          <ul>
            <li className="k-c" key={data.id}>
              <img src={data.cover} alt={data.title} className="k-c-img" />
              <div className="k-c-filter" />
              <h3 className="k-c-title">{data.title}</h3>
            </li>
          </ul>
        </NavLink>
      ))}
    </div>
  );
  
}

export default Card;
