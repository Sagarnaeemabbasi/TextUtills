import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.backGround} bg-${props.backGround}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand">{props.title}</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                {props.home}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="About">
                About
              </Link>
            </li>
          </ul>

          <div className="d-flex mx-3">
            <button
              className="bg-danger mx-2"
              onClick={() => props.clickDifferentbgHandler("danger")}
              style={{ height: "30px", width: "30px" }}
            ></button>
            <button
              className="bg-info mx-2"
              onClick={() => props.clickDifferentbgHandler("info")}
              style={{ height: "30px", width: "30px" }}
            ></button>
            <button
              className="bg-secondary mx-2"
              onClick={() => props.clickDifferentbgHandler("secondary")}
              style={{ height: "30px", width: "30px" }}
            ></button>
            <button
              className="bg-warning mx-2"
              onClick={() => props.clickDifferentbgHandler("warning")}
              style={{ height: "30px", width: "30px" }}
            ></button>
          </div>
          <div
            className="form-check form-switch mx-3"
            style={{ color: props.GreenButtonColor }}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              onClick={props.onClickGreenBtn}
              // checked
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckChecked"
              color="blue"
            >
              {props.greenMode}
            </label>
          </div>

          <div
            className="form-check form-switch"
            style={{ color: props.buttonColor }}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              onClick={props.onClick}
              // checked
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckChecked"
              color="blue"
            >
              {props.mode}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "TextUtils",
  home: "Home",
};
export default Navbar;
