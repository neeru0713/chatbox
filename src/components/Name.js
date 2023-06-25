import React from "react";

const Name = ({ color, text }) => {
  return (
    <div
      style={{ background: color }}
      className="header-img d-flex justify-content-center align-items-center name-icon"
    >
      <div className="text-center lh-1">{text}</div>
      <div className="online"></div>
    </div>
  );
};

export default Name;
