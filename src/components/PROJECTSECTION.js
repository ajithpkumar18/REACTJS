import React from "react";
import PROJECTCARD from "./PROJECTCARD";
import { Link } from "react-router-dom";
import { Consumer } from "../CONTEXT";
function PROJECTSECTION() {
  var obj = [];
  let run = (projects) => {
    let len = projects.length;
    console.log(len);
    // if (projects.length == 2) {
    //   obj = projects.slice(0, 2).map((project) => (
    //     <div key={project.id} className="col-12 col-md-6 my-2">
    //       <PROJECTCARD anyvariable={project} />
    //     </div>
    //   ));
    // } else {
    obj = projects.slice(0, 3).map((project) => (
      <div key={project.id} className="col-12 col-md-4 my-2">
        <PROJECTCARD anyvariable={project} />
      </div>
    ));
    // }

    return obj;
  };
  return (
    <Consumer>
      {(value) => {
        const { projects } = value;
        let obj = run(projects);
        // console.log(projects);
        console.log(obj);
        return (
          <div className="container text-center my-5">
            <h1 className="font-weight-light">
              My <span className="text-info">Projects</span>
            </h1>
            <div className="lead">I build products. Just like this website</div>
            <div className="row my-5 pt-3">{obj}</div>
            <div className="my-5">
              <Link to="/allprojects" className="text-dark text-right">
                <h5>
                  See my projects
                  <i className="fas fa-arrow-right align-middle"></i>
                </h5>
              </Link>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default PROJECTSECTION;
