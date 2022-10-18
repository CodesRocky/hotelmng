import React, { useState } from 'react'
import {FaArrowLeft,FaArrowRight} from 'react-icons/fa';

import './img.css'
import img1 from './Npic.jpeg'
import img2 from './N1pic.jpeg'
import img3 from './N2pic.jpeg'



const Topimg = () => {
    const[pic,setPic]=useState(img1)
    const mngbtn = () =>
    {
        if(pic===img1)
        {
        setPic(img2)
        }
        else if(pic===img2)
        {
            setPic(img3)
        }
        else
        {
            setPic(img1)
        }
    }
    const mngbtn2 = () =>
    {
        if(pic===img1)
        {
        setPic(img3)
        }
        else if(pic===img2)
        {
            setPic(img1)
        }
        else
        {
            setPic(img2)
        }
    }
  return (
    <div className='top_img'>
        
        <img src={pic} alt='hotel_pic'/>
        
        <div className='scond'>
            <button className='btn1' onClick={mngbtn}><FaArrowLeft style={{color: 'white',fontSize: '45px'}}/></button>
            <button className='btn2' onClick={mngbtn2}><FaArrowRight style={{color: 'white',fontSize: '45px'}}/></button>
        </div>
    </div>
  )
}


export default Topimg;