import React from "react";
import "./ProudlyPresented.css";
import greenery from "../../Image/greenery.png";
import greenery2 from "../../Image/greenery2.png";
import greenery3 from "../../Image/greenery3.png";
const ThirdSection = () => {
  return (
    <React.Fragment>
      <div className="text-center mt-4">
        <h2>Proudly Presented by</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
          <br />
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="justify-content-md-center mt-5 d-flex flex-row bg-highlight overflow-auto">
        <div className="w-md-20 mx-5">
          <img src={greenery} alt="" />
        </div>
        <div className="w-md-20 mx-5">
          <img src={greenery3} alt="" />
        </div>
        <div className="w-md-20 mx-5">
          <img src={greenery2} alt="" />
        </div>
        <div className="w-md-20 mx-5">
          <img src={greenery3} alt="" />
        </div>
        <div className="w-md-20 mx-5">
          <img src={greenery} alt="" />
        </div>
      </div>
    </React.Fragment>
  );
};
export default ThirdSection;
