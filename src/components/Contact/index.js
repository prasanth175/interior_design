import React from 'react';
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { BsPhoneVibrate } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

import './index.css'; // Make sure to link your CSS file here

const Contact = () => {
  return (
    <div className='contact-section' id='contact'>
      <div className='contact-content'>
        <h1 className='contact-heading'>Contact Us</h1>
        <div className='contact-details'>
            <div className='contact-details-container'>
                <MdOutlineMapsHomeWork className='contact-img' />
                <h2 className='contact-details-heading'>ADDRESS</h2>
                <p className='contact-details-txt'>Bus Station, Rajahmundy</p>
            </div>
            <div className='contact-details-container'>
                <BsPhoneVibrate className='contact-img' />
                <h2 className='contact-details-heading'>PHONE</h2>
                <p className='contact-details-txt'>0123456789</p>
            </div>
            <div className='contact-details-container'>
                <TfiEmail className='contact-img' />
                <h2 className='contact-details-heading'>EMAIL</h2>
                <p className='contact-details-txt'>business000@gmail.com</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
