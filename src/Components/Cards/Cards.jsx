import React from 'react'
import './cards.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Cards = () => {
  return (
    <div className='grid-one-item grid-common grid-c1'>
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Cards</h3>
        <button className="grid-c-title-icon">
            <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <div className="grid-c1-content">
        <p>Balance</p>
        <div className="lg-value">$22, 000</div>
        <div className="card-wrapper">
            <span className="card-pin-hidden">**** **** ****</span>
            <span>1234</span>
        </div>
      </div>
    </div>
  )
}

export default Cards
