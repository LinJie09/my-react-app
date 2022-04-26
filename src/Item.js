import React from "react";
export default function Item({ test, click, value }) {
  return (
    <img
      onClick={test}
      className={`${
        click % 2 === 0 ? "picture-append-alreadyClick" : "picture-append "
      }`}
      src={value}
    />
  );
}
