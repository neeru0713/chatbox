import React from "react";
import Converstation from "./Converstation.js";
import Name from "./Name.js";

const SideBar = () => {
  return (
    <div className="sidebar d-flex flex-column">
      <div className="name-header d-flex flex-row justify-content-between ms-2 mt-3 ">
        <Name text="NR"/>

        <div>
          <h5>Rolande Raimondi</h5>
          <p className="mt-n1">Research Nurse</p>
        </div>
      </div>
      <div className="mt-5 ">
        <div className="d-flex justify-content-around ">
          <h4>Conversations</h4>
          <div className="plus-symbol d-flex justify-content-center align-items-center">
            <span className="text-center">+</span>
          </div>
        </div>

        <div className="d-flex flex-column converstaions mt-4">
          <Converstation name="Poland Office" />
          <Converstation name="introductions" />
          <Converstation name="India Office" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
