import "../../styles/index.scss";
/*import Dataloc from "../../servay/dataloc.json";*/
import "../../styles/index.scss";
import Arrowleft from "../../assets/arrowL.svg";
import Arrowright from "../../assets/arrowR.svg";
import Banimghome from "../../assets/ban-img-home.png";

function Slideshow() {
  return (
    <ul className="container-k-carousel">
      <img className="k-sl-al" src={Arrowleft} alt="arrow_left"/>
      <img className="k-sl-ar" src={Arrowright} alt="arrow_right"/>
      <img className="k-sl-slide" src={Banimghome} alt="rental-pictures" />
    </ul>
  );
}

export default Slideshow;
