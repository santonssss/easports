import React from "react";
import "./RibbonImageWrapper.css";
import man_walk from "../../images/man_walk.png";
import man_ring from "../../images/man_ring.png";
import man_boxing from "../../images/man_boxing.png";
import man_sitbox from "../../images/man_sitbox.png";
import man_sitting from "../../images/man_sitting.png";
import man_smile from "../../images/man_smile.png";
type Props = {};

const RibbonImageWrapper = (props: Props) => {
  return (
    <div className="ribbonImageWrapper">
      <div className="ribbonImageWrapper__card">
        <img src={man_walk} alt="image" />
      </div>
      <div className="ribbonImageWrapper__card">
        <img src={man_sitting} alt="image" />
      </div>
      <div className="ribbonImageWrapper__card">
        <img src={man_boxing} alt="image" />
      </div>
      <div className="ribbonImageWrapper__card">
        <img src={man_smile} alt="image" />
      </div>
      <div className="ribbonImageWrapper__card">
        <img src={man_ring} alt="image" />
      </div>
      <div className="ribbonImageWrapper__card">
        <img src={man_sitbox} alt="image" />
      </div>
    </div>
  );
};

export default RibbonImageWrapper;
