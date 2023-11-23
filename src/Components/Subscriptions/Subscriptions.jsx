import React from 'react'
import './subscription.css'
import { subscriptions } from '../../data/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import alert from '../../Assets/icons/alert.svg'

const Subscriptions = () => {
  return (
    <div className='subgrid-two-item grid-common grid-c5'>
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Subscriptions</h3>
        <button className="grid-c-title-icon">
            <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <div className="grid-c5-content">
        <div className="grid-items">
            {
                subscriptions.map((subscription) => (
                    <div className="grid-item" key={subscription.id}>
                        <div className="grid-item-l">
                            <div className="icon">
                                <img src={alert} alt="" />
                            </div>
                            <div className="text text-silver-v1">
                                {subscription.title}
                                <span>due {subscription.due_date}</span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Subscriptions
