import React from 'react'
import './footer.css'
import { FaFacebookF,FaInstagram,FaTwitter,FaYoutube,FaApple,FaBlackberry,FaGooglePlay } from 'react-icons/fa';


function Footer() {
    return (
        <div className='mainbox'>
            <div className='box1'>
                <h1>
                    Social Sites
                </h1>
                <div className='socialicon'>
                    <a href="/" className='yt'>
                       <FaYoutube size={'30px'}/>
                    </a>
                    <a href="/" className="fb">
                    <FaFacebookF size={'30px'}/>
                    </a>
                    <a href="/" className="twit">
                    <FaTwitter size={'30px'}/>
                    </a>
                    <a href="/" className="insta">
                    <FaInstagram size={'30px'}/>
                    </a>
                </div>

            </div>

            <div className='box2'>
                <div className='logo'>
                    <h1>VIP Resort</h1>
                </div>
                <div className='over'>
                    <p>Overview</p>
                    <a href='/'>About</a>
                    <a href='/'>Location</a>
                    <a href='/'>Careers</a>
                    <a href='/'>Contacts</a>
                </div>
                
                    <div className='supp'>
                        <p>Support</p>
                        <a href='/'>Product</a>
                        <a href='/'>Bugs</a>
                        <a href='/'>Other</a>
                    </div>
                    <div className='resor'>
                        <p>Resource</p>
                        <a href='/'>Privecy</a>
                        <a href='/'>Brands Standred</a>
                    </div>

                
            </div>
            <div className='box3'>
                
                    <a href="/" className="app1">
                    <FaApple size={'30px'}/>
                    </a>
                    <a href="/" className="app2">
                    <FaBlackberry size={'30px'}/>
                    </a>
                    <a href="/" className="app3">
                    <FaGooglePlay size={'30px'}/>
                    </a>
                
            </div>

            <div className='box4'>
                
                    <div className='tandc'>
                        <a href='/term'>Term and Condition</a>
                    </div>
                    <div className='privecy'>
                        <a href='/'>Upcoming</a>
                    </div>
                    <div className='copy'>
                        <p>copyright @2022</p>
                    </div>
                    <div className='top'>
                        <button>Top</button>
                    </div>
                
            </div>
        </div>
    )
}
export default Footer;