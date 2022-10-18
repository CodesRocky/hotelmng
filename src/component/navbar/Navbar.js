import React from 'react'
import { FaFacebookF,FaInstagram,FaTwitter,FaVuejs } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Nav.css'
const Navbar = () => {

   

    return (
        <div className='main_nav'>
            <div className='icon'>
                <Link to="/">Home</Link>
                <Link to='/room'>Rooms</Link>
                <Link to='/about'>About</Link>
                <Link className='blog' to='/'>Blog</Link>
                <Link className='page' to='/'>Pages</Link>
                <Link className='contact' to='/'>Contact</Link>
            </div>
            <div className='htl_name'>
                <div className='head'> <FaVuejs size={'35px'} color='white'/> <h2>VIP</h2> <p>Resort</p></div>
            </div>
            <div className='right_nav'>
                <div className='social_icon'>
                    <Link className='fb' to='/'><FaFacebookF/></Link>
                    <Link className='tw' to='/'><FaTwitter/></Link>
                    <Link className='in' to='/'><FaInstagram/></Link>
                </div>
                <div className='nav_btn'>
                    <Link className='book' to='/bookpage'>Book a room</Link>
                </div>
            </div>
        </div>
    )
}
export default Navbar;