import React from 'react'
import { FaSnapchat, FaTwitter, FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import './index.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-icons'>
            <AiOutlineInstagram className='footer-icon' />
            <FaSnapchat className='footer-icon' />
            <FaTwitter className='footer-icon' />
            <FaFacebookF className='footer-icon' />
        </div>
        <div className='footer-navs'>
            <a className='footer-link' href='#home'><p className='footer-nav'>Home</p></a>
            <a className='footer-link' href='#categories'><p className='footer-nav'>Categories</p></a>
            <a className='footer-link' href='#contact'><p className='footer-nav'>Contact</p></a>
        </div>
        <h4 className='footer-txt'>Business Footer @ 2023</h4>
    </div>
  )
}

export default Footer