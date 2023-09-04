import React from 'react'; // Import your Navigation component here
import './index.css'; // Import the CSS file for this component
import Img from '../../Images/home-carousel-2.jpg'
import FeaturedProjects from '../Project';

function Homepage() {
  return (
    <>
    <div className="homepage">
      <div className="background">
        {/* You can use an image or video here */}
        <img src={Img} alt="Background" />
      </div>
      <div className="content">
        <div className="intro">
          <h1>Your Home, Your Style</h1>
          <p>Discover endless possibilities in interior design.</p>
          <a href="#explore" className="cta-button">
            Explore Now
          </a>
        </div>
      </div>
    </div>

    <FeaturedProjects />
    </>
  );
}

export default Homepage;
