import React from "react";
// import Vipin from "../photos/vipin.JPG";

function TITLE() {
    const name="Ajith P. Kumar"
    const excerpt = "I am a freelancer developer";
  return (
    <div className="container">
      <div className="row text-center align-items-center my-5 py-5">
        <div className="col-12 col-md-6">
          <img
            className="image img-fluid rounded-circle w-75"
            src={require('../photos/ajith.jpg')}
            alt="your name"
          />
        </div>
        <div className="col-12 col-md-6 pt-5">
          <div className="font-weight-light" style={{ fontSize: "50px" }}>
            Hi, I am <span className="text-info">{name}</span>
          </div>
          <h4 className="font-weight-light">{excerpt}</h4>
        </div>
      </div>
    </div>
  );
}

export default TITLE;
