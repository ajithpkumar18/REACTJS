import React from "react";
import { Consumer } from "../CONTEXT";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
// import reactRouterDom from "react-router-dom";

function PROJECTPAGE(props) {
  return (
    <Consumer>
      {(value) => {
        const { projects } = value;
        const id = props.match.params.id;
        const project = projects.filter((project) => project.id == id)[0];
        const { imageUrl, title, excerpt, link } = project;
        return (
          <div className="container py-5 my-5 markdown">
            <div className="justify-content-center">
              <img src={imageUrl} alt={title} className="w-100" />
            </div>
            <h1 className="font-weight-light text-center my-5">{title}</h1>
            <ReactMarkdown style="font-size:36px" children={excerpt} />
            <p>
              Link: <a href={link}>{link}</a>
            </p>
            <Link to={`/project/${id}`} className="stretched-link"></Link>
          </div>
        );
      }}
    </Consumer>
  );
}
export default PROJECTPAGE;
