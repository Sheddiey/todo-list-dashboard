import React from "react";
import "./Sliderbar.css";
import person_one from "../../Assets/images/p_one.png";
import { navigationLinks } from "../../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Slidebar = () => {
  return (
    <div className={`slidebar`}>
      <div className="user-info">
        <div className="info-img img-fit-cover">
          <img src={person_one} alt="" />
        </div>
        <span className="info-name">Sheddiey</span>
      </div>
      <nav className="navigation">
        <ul className="nav-list">
          {navigationLinks.map((navLink) => (
            <li className="nav-item" key={navLink.id}>
              <a href="#" className={`nav-link`}>
              <FontAwesomeIcon className="nav-link-icon" icon={navLink.icon} />
                <span className="nav-link-text">{navLink.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Slidebar;
