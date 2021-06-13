import React from "react";
import "./WelcomeNature.css";
import buds from "../../Image/buds.png";
import white from "../../Image/white.png";
import blue from "../../Image/blue.png";

const SecondSection = () => {
  return (
    <React.Fragment>
      <div className="mb-5">
        <div className="text-center">
          <img src={buds} alt="" />
          <h2 className="welcome-nature">Welcome to Nature</h2>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
            <br />
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="d-flex flex-row bg-highlight overflow-auto justify-content-md-center mt-5">
          <div className="w-md-25 mx-4">
            <img className="white" src={white} alt="food-origin" />
          </div>
          <div className="w-md-25 mx-4">
            <img className="white" src={blue} alt="food-origin" />
          </div>
          <div className="w-md-25 mx-4">
            <img className="white" src={white} alt="food-origin" />
          </div>
          <div className="w-md-25 mx-4">
            <img className="white" src={white} alt="food-origin" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default SecondSection;
