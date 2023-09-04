import React from 'react'
import './index.css'
import AboutUsImg from '../../Images/aboutus-img.jpg'

const AboutUs = () => {
  return (
    <div className='about-us-container'>
        <img className='about-us-img' src={AboutUsImg} alt='aboutus imgs' />
        <div className='about-us-content'>
            <h1 className='about-us-heading'>ABOUT US</h1>
            <p className='about-us-txt'>These designers work closely with clients to understand their preferences, needs, and visions for their living spaces. 
                They consider factors such as color schemes, furniture arrangement, lighting, textures, and decorative elements to transform 
                empty rooms into inviting and functional areas.

                <br /><br />    Interior designers draw inspiration from various design styles, 
                ranging from minimalist and contemporary to traditional and eclectic. They carefully select furniture, 
                decor, and materials to create a cohesive and visually appealing atmosphere while optimizing the use of available space.</p>
                <hr className='h-line' />
        </div>
    </div>
  )
}

export default AboutUs