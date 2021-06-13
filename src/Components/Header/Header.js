import React from "react";
import "./Header.css";
import logo from "../../Image/logo.png";

const Header = () => {
  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-lg " style={{ boxShadow: "none" }}>
        <div className=" navbar-brand">
          <img className="logo float-left" src={logo} />
          <h3 className="m-3">
            <strong>organic</strong>
          </h3>
        </div>
        <button
          class="navbar-toggler ml-auto custom-toggler"
          type="button"
          data-toggle="collapse"
          data-target=".collapsingNavbar4"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-md-auto ml-2">
            <a
              style={{ color: "#374b5c" }}
              className="nav-item nav-link"
              href="#"
              data-target=".collapsingNavbar4"
            >
              Home
            </a>
            <a
              style={{ color: "#374b5c" }}
              className="nav-item nav-link"
              href="#"
              data-target=".collapsingNavbar4"
            >
              Product
            </a>
            <a
              style={{ color: "#374b5c" }}
              className="nav-item nav-link"
              href="#"
            >
              Blog
            </a>
            <a
              style={{ color: "#374b5c" }}
              className="nav-item nav-link "
              href="#"
            >
              {" "}
              About Us
            </a>
            <a
              style={{ color: "#374b5c" }}
              className="nav-item nav-link "
              href="#"
            >
              {" "}
              Contact
            </a>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};
export default Header;
