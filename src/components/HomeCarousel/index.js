
import React, { useState } from 'react';
import { useTransition, animated } from '@react-spring/web';
import './index.css';
// import { Parallax } from 'react-parallax';
import Fade from 'react-reveal/Fade';

import Img from '../../Images/home-corousel-1.jpg';
import Img2 from '../../Images/home-carousel-2.jpg';
import Img3 from '../../Images/home-carousel-3.jpeg';
import Img4 from '../../Images/home-carousel-4.jpg';

const slides = [Img2, Img, Img3, Img4].map((image) => `url(${image})`);
const textItems = ['WELCOME', 'TO', 'HOME', 'INTERIOR', 'DESIGNS'];

export default function App() {
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const imageTransitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 2000 },
    onRest: (_, _b, item) => {
      if (index === item) {
        setTimeout(() => {
          setIndex((state) => (state + 1) % slides.length);
        }, 3000);
      }
    },
    immediate: (key) => index === key,
  });

  const textTransitions = useTransition(textItems[textIndex], {
    key: textIndex,
    from: { opacity: 0, transform: 'translateY(100%)' },
    enter: { opacity: 1, transform: 'translateY(0%)' },
    leave: { opacity: 0, transform: 'translateY(-100%)' },
    config: { duration: 2000 },
    onRest: () => {
      setTextIndex((state) => (state + 1) % textItems.length);
    },
  });

  return (
    <div className="app-container">
      <Fade top duration={1500} >
        <div className="bg-container" id='home'>
          {imageTransitions((style, i) => (
            <animated.div
              key={i}
              className="fade-bg"
              style={{
                ...style,
                backgroundImage: slides[i],
              }}
            />
          ))}
          <div className="text-overlay">
            {textTransitions((style, item) => (
              <animated.div style={style} className="text-item">
                {item}
              </animated.div>
            ))}
          </div>
        </div>
        </Fade>
    </div>
  );
}
