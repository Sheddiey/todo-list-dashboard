import React from 'react'
import './contentMain.css'
import Cards from '../Cards/Cards'
import Transaction from '../Transaction/Transaction'

const ContentMain = () => {
  return (
    <div className='main-content-holder'>
      <div className="content-grid-one">
        <Cards />
        <Transaction />
      </div>
    </div>
  )
}

export default ContentMain
