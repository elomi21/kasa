import { NavLink } from "react-router-dom";
import "../../styles/index.scss";

function Card({ id , title, cover }) {
  return (
    <>
      <ul>
        <NavLink to={`/rental-description/${id}`} >
          <li className="k-c" key={id}>
            <img src={cover} alt={title} className="k-c-img" />
            <div className="k-c-filter" />
            <h3 className="k-c-title">{title}</h3>
          </li>
        </NavLink>
      </ul>
    </>
  );
}

export default Card;
