import React, { useContext } from "react";
import "./contentTop.css";
import { SidebarContext } from "../../Context/sidebarContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const ContentTop = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  return (
    <div className="main-content-top">
      <div className="content-top-left">
        <button
          type="button"
          className="sidebar-toggler"
          onClick={() => toggleSidebar()}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <h3 className="content-top-title">Home</h3>
      </div>
      <div className="content-top-btns">
        <button className="search-btn content-top-btn">
            <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
        </button>
        <button className="notification-btn content-top-btn">
            <FontAwesomeIcon className="icon" icon={faBell} />
            <span className="notification-btn-dot"></span>
        </button>
      </div>
    </div>
  );
};

export default ContentTop;
