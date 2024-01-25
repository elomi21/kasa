import "../../styles/index.scss";
import Stargrey from "../../assets/stargrey.svg";
import Starred from "../../assets/starred.svg";



function RatingStar({ value }) {

    
    return (
      <>
          <div className="rating-star">
          {[...Array(5)].map((_, index) => (
            <img key={index} src={index <  value  ? Starred : Stargrey } alt="star"/>
            ))}
          </div>
      </>
    );
}

export default RatingStar;