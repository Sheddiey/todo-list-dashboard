import React from 'react'
import './contentMain.css'
import Cards from '../Cards/Cards'
import Transaction from '../Transaction/Transaction'
import Report from '../Report/Report'
import Budget from '../Budget/Budget'

const ContentMain = () => {
  return (
    <div className='main-content-holder'>
      <div className="content-grid-one">
        <Cards />
        <Transaction />
        <Report />
      </div>
      <div className="content-grid-two">
        <Budget />
      </div>
    </div>
  )
}

export default ContentMain
