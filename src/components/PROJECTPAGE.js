import React from "react";

function PROJECTPAGE(props) {
  return (
    <div className="py-5 my-5">
      <h1> PROJECT {props.match.params.num}</h1>
    </div>
  );
}
export default PROJECTPAGE;
