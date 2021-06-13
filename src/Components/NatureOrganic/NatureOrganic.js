import React from "react";
import "./NatureOrganic.css";
import Flower from "../../Image/Flower.png";

const NatureOrganic = () => {
  return (
    <React.Fragment>
      <div className="row bg-highlight">
        <div className="written col-md-6 ">
          <h4 className="Healthy-life">Healthy Life With</h4>
          <h3 className="Nature-organic">
            <strong>Nature Organic</strong>
          </h3>
          <div className="sec-written ">
            <p>Vegetables are the edible parts of a plants</p>
            <p>that are used in cooking and eaten now</p>
          </div>
          <button class="explore-now">Explore now</button>
        </div>
        <div className=" image-section col-md-6">
          <img class="flower" src={Flower} alt="" />
        </div>
      </div>
    </React.Fragment>
  );
};
export default NatureOrganic;
