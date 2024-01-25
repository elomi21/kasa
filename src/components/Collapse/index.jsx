import "../../styles/index.scss";
import Colarrow from "../../assets/arrow_back_ios-24px 2.svg";
import React, { useState } from "react";

function Collapse({ title, content }) {
  const [visible, setVisible] = useState(false);

  function HandleMoreClick() {
    setVisible(!visible);
  }

  return (
    <>
      <div>
        <div className="col-title-arrow" onClick={HandleMoreClick}>
          <h3 className="col-t">{title}</h3>
          <img
            src={Colarrow}
            alt="logo-arrow"
            className={`logo-arrow ${visible ? "open" : ""} `}
          />
        </div>
        <ul className={`col-content ${visible ? "visible" : ""}`}>
          {content}
        </ul>
      </div>
    </>
  );
}

export default Collapse;
