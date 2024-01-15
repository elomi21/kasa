import "../../styles/index.scss";
import Colarrow from "../../assets/arrow_back_ios-24px 2.svg"

function Collapse() {
    
    return (
      <div className="container-collapse">
        <div className="collapse-title-arrow">
          <h2 className="collapse-title">blabla</h2>
          <img src={Colarrow} className="collapse-arrow" alt="collapse-arrow"/>
        </div>
        <div className="collapse-content">
          <ul className="k-col-group">
            <li className="k-col-group-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In nisi
              illum iusto beatae error velit illo soluta quas, rerum maiores
              magnam distinctio libero vitae numquam tempore inventore qui
              delectus dolores.
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Collapse;