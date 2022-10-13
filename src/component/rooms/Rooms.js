import React from 'react'
import './room.css'

const Rooms = () => {
    return (
        <div className='main_rm'>
            <p className='main_p'>Featured Rooms</p>
            <h1 className='main_h1'>Choose a Better Rooms</h1>
            <div className='rm'>
                <div className='rm1'>
                    <div className='rm1_1'>
                        <div className='mng'>
                            <p>From 10000INR /Night</p>
                            <h2>Superior Room</h2>
                        </div>
                    </div>
                    <div className='rm1_2'>
                        <div className='mng'>
                            <p>From 10000INR /Night</p>
                            <h2>Deluxe Room</h2>
                        </div>
                    </div>
                </div>
                <div className='rm2'>
                    <div className='rm2_1'>
                        <div className='mng'>
                            <p>From 10000INR /Night</p>
                            <h2>Signature Room</h2>
                        </div>
                    </div>
                    <div className='rm2_2'>
                        <div className='mng'>
                            <p>From 10000INR /Night</p>
                            <h2>Couple Room</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Rooms;