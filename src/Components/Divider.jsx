import React from "react";
import EllipseLeft from "../Assets/icons/Ellipse-Left.svg";
import EllipseRight from "../Assets/icons/Ellipse-Right.svg";

const Divider = ({ title }) => {
  return (
    <div className="divider bg-background mt-5 mb-5">
      <img src={EllipseLeft} alt="" />
      <div className="ml-1 mr-1">
        <h3>
          <b>{title}</b>
        </h3>
      </div>
      <img src={EllipseRight} alt="" />
    </div>
  );
};

export default Divider;
