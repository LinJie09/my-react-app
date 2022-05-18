import React from "react";
import "./CalcWork.css";

export const ClearButton = (props) => (
  <div className="clear-btn" onClick={props.handleClear}>
    {props.children}
  </div>
);
