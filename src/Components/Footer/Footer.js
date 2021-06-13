import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../Image/logo.png";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="Footer-section overflow-auto">
        <footer className=" text-lg-start">
          <div className="container">
            <div className="row" style={{ textAlign: "left" }}>
              <div
                className="col-lg-3 col-md-6 mb-md-0"
                style={{ marginTop: "80px" }}
              >
                <div className="my-4 d-flex flex-row">
                  <img className="logo float-left" src={logo} />
                  <h3 className="mx-2 text-light">organic</h3>
                </div>
                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#!" class="text-light">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor{" "}
                    </a>
                  </li>
                  <li>
                    <hr
                      style={{
                        width: "80px",
                        backgroundColor: "#00dbd0",
                        marginLeft: "0",
                        height: "2px",
                      }}
                    />
                  </li>
                  <li>
                    <a href="#!" class="text-light">
                      © Copyright 2020 Nature
                    </a>
                  </li>
                </ul>
              </div>

              <div
                className="col-lg-3 col-md-6 mb-md-0"
                style={{ marginTop: "80px" }}
              >
                <h5
                  className="text-uppercase mb-0"
                  style={{ textAlign: "left" }}
                >
                  Information
                </h5>
                <hr
                  style={{
                    width: "80px",
                    backgroundColor: "#00dbd0",
                    marginLeft: "0",
                    height: "2px",
                  }}
                />
                <ul className="list-unstyled" style={{ textAlign: "left" }}>
                  <li className="my-2">
                    <a href="#!" class="text-light">
                      About Us
                    </a>
                  </li>
                  <li className="my-2">
                    <a href="#!" class="text-light">
                      Products
                    </a>
                  </li>
                  <li className="my-2">
                    <a href="#!" class="text-light">
                      Contact Us
                    </a>
                  </li>
                  <li className="my-2">
                    <a href="#!" class="text-light">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>

              <div
                className="col-lg-3 col-md-6 mb-md-0"
                style={{ marginTop: "80px" }}
              >
                <ul className="list-unstyled mb-0">
                  <li className="my-4">
                    <a
                      href="#!"
                      className="text-light"
                      style={{ textAlign: "left" }}
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="text-light"
                      style={{ textAlign: "left" }}
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-dark"></a>
                  </li>
                  <li>
                    <a href="#!" class="text-dark"></a>
                  </li>
                </ul>
              </div>

              <div
                class="col-lg-3 col-md-6 mb-md-0"
                style={{ marginTop: "80px" }}
              >
                <h5 class="text-uppercase mb-0">Follow Us</h5>
                <hr
                  style={{
                    width: "80px",
                    backgroundColor: "#00dbd0",
                    marginLeft: "0",
                    height: "2px",
                  }}
                />

                <ul className="list-unstyled d-flex">
                  <li className="m-2">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </li>
                  <li className="m-2">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </li>
                  <li className="m-2">
                    <FontAwesomeIcon icon={faTwitter} />
                  </li>
                  <li className="m-2">
                    <FontAwesomeIcon icon={faInstagram} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};
export default Footer;
