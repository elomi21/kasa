import { NavLink } from "react-router-dom";
import "../../styles/Card.scss";
import Dataloc from "../../servay/dataloc.json";

const dataloc = Dataloc;

function Card() {
  return (
    <div className="k-gallery">
      {dataloc.map((data) =>(
        <NavLink to="" key={data.id}>
          <div className="k-c" key={data.id}>
            <img src={data.cover} alt={data.title} className="k-c-img" />
            <div className="k-c-filter" />
            <h3 className="k-c-title">{data.title}</h3>
        </div>
        </NavLink>
      ))}
      
    </div>
  );
  
}

export default Card;
