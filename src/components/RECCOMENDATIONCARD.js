import React from "react";
import { v4 as uuid } from "uuid";

function RECCOMENDATIONCARD(props) {
  const { name, designation, message, company } = props.detail;
  return (
    <div key={uuid()} className="col-12 col-md-4">
      <div className="card shadow h-100">
        <div className="card-body">
          <h4 className="card-text">{message}</h4>
          <p className="card-text text-secondary mb-0">{name}</p>
          <p className="card-text text-secondary">
            {designation} at {company}
          </p>
        </div>
      </div>
    </div>
  );
}

export default RECCOMENDATIONCARD;
