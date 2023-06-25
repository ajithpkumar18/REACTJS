import "../App.css";
import React from "react";
import { Link } from "react-router-dom";

function NAVBAR() {
  return (
    <nav className="navbar navbar-expand-md fixed-top bg-white ">
      <div className="container my-2">
        <Link
          exact
          to="/"
          className="navbar-brand font-weight-bold "
          style={{ color: "black" }}
        >
          AJITH P. KUMAR
        </Link>
        <Link exact to="/contact" className=" ml-auto mx-3">
          <button className=" navbar-btn font-weight-bold btn btn-outline-info   ">
            Contact me
          </button>
        </Link>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#collapseNav"
        >
          <span className="fas fa-bars text-dark"></span>
        </button>

        <div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
          <div className="navbar-nav">
            <a
              href="/"
              className="
                nav-item nav-link
                text-dark
                h6
                mx-1
                my-auto
                font-weight-bold
              "
            >
              BLOGS
            </a>
            <Link
              exact
              to="/allprojects"
              className="
                nav-item nav-link
                text-dark
                h6
                mx-1
                my-auto
                font-weight-bold
              "
            >
              PROJECTS
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NAVBAR;
