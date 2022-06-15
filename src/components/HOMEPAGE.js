import React from "react";
import ABOUTME from "./ABOUTME";
import PROJECTSECTION from "./PROJECTSECTION";
import RECCOMENDATION from "./RECCOMENDATION";
import TECHNOLOGY from "./TECHNOLOGY";
import TITLE from "./TITLE";

function HOMEPAGE() {
  return (
    <div>
      <TITLE />
      <RECCOMENDATION />
      <TECHNOLOGY />
      <PROJECTSECTION />
      <ABOUTME />
    </div>
  );
}

export default HOMEPAGE;
