import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Parallax } from 'react-parallax';
import './index.css';

import Img from '../../Images/home-carousel-2.jpg'
import Img1 from '../../Images/home-carousel-3.jpeg'


function FeaturedProjects() {
  const projects = [
    {
      title: 'Modern Minimalism',
      image: Img,
    },
    {
      title: 'Vintage Vibes',
      image: Img1,
    },
    // Add more project objects as needed
  ];

  const projectTransitions = useSpring({
    from: { opacity: 0, transform: 'translateY(100px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { mass: 1, tension: 120, friction: 14 },
    delay: 500,
  });

  return (
    <Parallax strength={400}>
      <div className="featured-projects" id="explore">
        <h2>Featured Projects</h2>
        <div className="project-cards">
          {projects.map((project, index) => (
            <animated.div key={index} className="project-card" style={projectTransitions}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
            </animated.div>
          ))}
        </div>
      </div>
    </Parallax>
  );
}

export default FeaturedProjects;
