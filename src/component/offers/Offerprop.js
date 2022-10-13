import React from 'react'
import './offer.css'
import { FaPagelines } from "react-icons/fa";


const Offerprop = (props) => {
  return (
    <div className='ofr_list_div'>
        <div className='ofr_img'>
            <img src={props.img} alt='hotel_offer_photo'/>
        </div>
        <div className='ofr_title'>
            <h3>{props.title}</h3>
        </div>
        <div className='ofr_cond'>
            <ul>
                <li><FaPagelines/>{props.cond[0].one}</li>
                <li><FaPagelines/>{props.cond[0].two}</li>
                <li><FaPagelines/>{props.cond[0].three}</li>
            </ul>
        </div>
        <div className='ofr_book'>
            <button>Book Now</button>
        </div>
    </div>
  )
}
export default Offerprop;