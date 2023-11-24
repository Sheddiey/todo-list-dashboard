import React from "react";
import "./financial.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Financial = () => {
  return (
    <div className="subgrid-two-item grid-common grid-c8">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Financial Advice</h3>
        <button className="grid-c-title-icon">
          <FontAwesomeIcon className="icon-plus" icon={faPlus} />
        </button>
      </div>
      <div className="grid-c8-content">
        <p className="text text-silver-v1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit...
        </p>
      </div>
    </div>
  );
};

export default Financial;
