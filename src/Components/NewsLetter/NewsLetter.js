import React from "react";
import "./NewsLetter.css";
import leaves from "../../Image/leaves.png";
import Carousel from "react-bootstrap/Carousel";
import inverted from "../../Image/inverted.png";
import women from "../../Image/women.png";
import Ratings from "../Ratings/Ratings";

const FourthSection = () => {
  return (
    <React.Fragment>
      <div className="row bg-highlight bg-white mt-5">
        <div className="col-md-4 text-left overflow-hidden">
          <img src={leaves} alt="" className="sideFlower" />
        </div>
        <div className="col-md-8 text-center ">
          <img src={inverted} alt="" />
          <Carousel
            variant="dark"
            style={{ color: "black", maxWidth: "500px", margin: "auto" }}
          >
            <Carousel.Item interval={500}>
              <img className="clientImg" src={women} alt="" />
              <Ratings />
              <h1 className="mt-4 names">Jane Doe</h1>
              <p className="messages">
                Thank you for all the amazing produce and products you deliver
                each week… you make my life so easy an bring goodness into our
                family eating. I’ve been roasting a lot of brussel sprouts and
              </p>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img className="clientImg" src={women} alt="" />
              <div>
                <Ratings />
              </div>

              <h1 className="mt-4 names">Michael Conner</h1>
              <p className="messages">
                Thank you for all the amazing produce and products you deliver
                each week… you make my life so easy an bring goodness into our
                family eating. I’ve been roasting a lot of brussel sprouts and
              </p>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img className="clientImg" src={women} alt="" />
              <Ratings />
              <h1 className="mt-4 names">Jane Doe</h1>
              <p className="messages">
                Thank you for all the amazing produce and products you deliver
                each week… you make my life so easy an bring goodness into our
                family eating. I’ve been roasting a lot of brussel sprouts and
              </p>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </React.Fragment>
  );
};
export default FourthSection;
