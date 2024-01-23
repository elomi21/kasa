import { NavLink } from "react-router-dom";
import "../../styles/index.scss";

function Card({ id, title, cover }) {
  return (
    <>
      <li className="k-c">
        <NavLink to={`/rental-description/${id}`}>
          <img src={cover} alt={title} className="k-c-img" />
          <div className="k-c-filter" />
          <h3 className="k-c-title">{title}</h3>
        </NavLink>
      </li>
    </>
  );
}

export default Card;
