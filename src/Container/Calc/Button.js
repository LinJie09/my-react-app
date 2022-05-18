import React from "react";
import "./CalcWork.css";
import propTypes from "prop-types";

const isOperator = (val) => {
  return !isNaN(val) || val === "." || val === "=";
};
isOperator.propTypes = {
  children: propTypes.func,
};
export const Button = (props) => (
  <div
    className={`button-wrapper ${
      isOperator(props.children) ? null : "operator"
    }`}
    onClick={() => props.handleClick(props.children)}
  >
    {props.children}
  </div>
);
