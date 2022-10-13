import React from 'react'
import Onoffer from './Onoffer';
import './offer.css'

const Offers = () => {
  return (
    <div className='main_ofr'>
        <div className='ofr_topic'>
            <p>Our Offers</p>
        </div>
        <div className='ofr_heading'>
            <h1>Ongoing Offers</h1>
        </div>
        <div className='ofr_list'>
            <Onoffer/>
        </div>
    </div>
  )
}
export default Offers;