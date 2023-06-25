import React from "react";

const Converstation = ({ name }) => {
  return (
    <div className="converstation w-100 d-flex ps-4 py-2 mt-2 align-items-center">
      <div className="me-4 d-flex justify-content-center align-items-center">
        <span>#</span>
      </div>
      <div className="fs-6">{name}</div>
    </div>
  );
};

export default Converstation;
