import "../../styles/index.scss";
import Colarrow from "../../assets/arrow_back_ios-24px 2.svg";
import React, { useState } from "react";

function Collapse({ title, content, id }) {
  const [visible, setVisible] = useState(false);

  function HandleMoreClick() {
    setVisible(!visible);
  }

  return (
    <>
      <ul key={id}>
        <li className="col-title-arrow" onClick={HandleMoreClick}>
          <h3 className="col-t">{title}</h3>
          <img
            src={Colarrow}
            alt="logo-arrow"
            className={`logo-arrow ${visible ? "open" : ""} `}
          />
        </li>
        <li className={`col-content ${visible ? "visible" : ""}`}>{content}</li>
      </ul>
    </>
  );
}

export default Collapse;
