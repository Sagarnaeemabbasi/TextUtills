import React, { useState } from "react";

function Alert(props) {
  // let capatilize=(word)=>{
  //     const capital =word.toLowerCase();
  //     return capital.charAt(0).toUpperCase()=capital.slice(1);
  // }
  const capitalize = (word) => {
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{height:"50px"}}>
      {props.alert && (
        <div className={`alert alert-${props.alert.type} `} role="alert">
          <strong>{capitalize(props.alert.type)}</strong> {props.alert.message}
        </div>
      )}
    </div>
  );
}
export default Alert;
