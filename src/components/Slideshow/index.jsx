import "../../styles/index.scss";
import Arrowleft from "../../assets/arrowL.svg";
import Arrowright from "../../assets/arrowR.svg";

function Slideshow(id, pictures) {
  return (
    <ul key={id} className="container-k-carousel">
      <img className="k-sl-al" src={Arrowleft} alt="arrow_left"/>
      <img className="k-sl-ar" src={Arrowright} alt="arrow_right"/>
      <img className="k-sl-slide" src={pictures} alt="rental-pictures" />
    </ul>
  );
}

export default Slideshow;
