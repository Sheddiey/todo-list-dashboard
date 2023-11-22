import React from 'react'
import './Sliderbar.css'
import { personsImgs } from '../../Assets/utils/images'
 import { navigationLinks } from '../../Assets/data/data'

const Slidebar = () => {
  return (
    <div className={`slidebar`}>
      <div className="user-info">
        <div className="info-img img-fit-cover">
            <img src={personsImgs} alt="" />
        </div>
        <span className="info-name">
            alice-maina
        </span>
      </div>
      <nav className="navigation">
        <ul className="nav-list">
            {navigationLinks.map((navLink) => (
                <li className="nav-item" key={navLink.id}>
                    <a href="#" className={`nav-link`}>
                        <img className='nav-link-icon' src={navLink.image} alt={navLink.title} />
                        <span className="nav-link-text">{navLink.title}</span>
                    </a>
                </li>
            ))}
        </ul>
      </nav>
    </div>
  )
}

export default Slidebar
