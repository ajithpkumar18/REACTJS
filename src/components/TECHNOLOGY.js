import React from "react";
import TECH from "./TECH";
import { v4 as uuid } from "uuid";
import { Consumer } from "../CONTEXT";

function TECHNOLOGY() {
  return(
    
    <Consumer>
      {(value)=>{
        const {skills}=value
const finalSkillRow = [];
  for (let i = 0; i < skills.length / 4; i++) {
    let skillRow = skills.slice(i * 4, (i + 1) * 4);
    finalSkillRow.push(
      <div key={uuid()} class="d-flex justify-content-around py-4">
        {skillRow.map((skill) => (
          <TECH key={uuid()} kuchbhi={skill} />
        ))}
      </div>
    );
  }

  return (
    
    <div class="bg-light w-100">
      <div class="container text-center py-5">
        <h1 class="font-weight-light">
          <span class="text-info">Technology</span> stack
        </h1>
        <div class="lead pb-5">
          I design, develop and deliver with these weapons
        </div>
        {finalSkillRow}
      </div>
    </div>
  );
      }}
    </Consumer>
  )
  
}

export default TECHNOLOGY;
