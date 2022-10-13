import React from 'react'
import './offer.css'
import Offerdata from './Offerdata'
import Offerprop from './Offerprop'

const Onoffer = () => {   
    const showdata = (Offerdata) =>
    {
        return(
            <Offerprop
            key={Offerdata.id}
            img={Offerdata.img}
            title={Offerdata.title}
            cond={Offerdata.cond}
            />
        )
    }

  return (
    <div className='ofr_logic' >
            {Offerdata.map(showdata)}
    </div>
  )
    
}
export default Onoffer;