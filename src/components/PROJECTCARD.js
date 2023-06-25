import React from "react";
import { Link } from "react-router-dom";

function PROJECTCARD(props) {
  const { id, title, excerpt, imageUrl } = props.anyvariable;
  let sen;
  console.log(String(excerpt).length);
  if (String(excerpt).length > 27) {
    sen = excerpt.slice(0, 24);
    console.log(sen);
  }
  return (
    <div className="card shadow h-70 w-60">
      <img className="card-img-top" src={imageUrl} alt={title} />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">
          {sen}
          <b>
            <Link to={`/project/${id}`}>...</Link>
          </b>
        </p>

        <Link to={`/project/${id}`} className="stretched-link"></Link>
      </div>
    </div>
  );
}

export default PROJECTCARD;
