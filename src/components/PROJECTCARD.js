import React from "react";
import { Link } from "react-router-dom";

function PROJECTCARD(props) {
  const { id, title, excerpt, imageUrl } = props.anyvariable;
  return (
    <div className="card shadow h-100">
      <img className="card-img-top" src={imageUrl} alt={title} />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{excerpt}</p>
        <a href="/" className="stretched-link"></a>
        <Link to={`REACTJS/project/${id}`} className="stretched-link"></Link>
      </div>
    </div>
  );
}

export default PROJECTCARD;
