import * as React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from './styles.module.css'
import './index.css'

import Bed from '../../Images/bed.jpg';
import Kitchen from '../../Images/kitchen.jpg';
import Hall from '../../Images/hall.jpg';
import CupBoard from '../../Images/cupboard.jpg';
import Ceiling from '../../Images/ceiling.jpg';
import TV from '../../Images/tv.jpg';

const categoryData = [
    {
      id: 1,
      image: Bed,
      heading: 'Bedroom Designs',
      text: 'Transform your bedroom into a peaceful oasis with our exquisite designs that combine comfort and style. Discover a range of themes to match your unique taste.',
    },
    {
      id: 2,
      image: Hall,
      heading: 'Hall Designs',
      text: 'Make a lasting impression with our stunning hall designs that exude elegance and warmth. Create a welcoming space for gatherings and relaxation.',
    },
    {
      id: 3,
      image: TV,
      heading: 'TV Room Designs',
      text: 'Elevate your TV room experience with our innovative designs that blend entertainment and aesthetics. Experience the perfect harmony of technology and design.',
    },
    {
      id: 4,
      image: Kitchen,
      heading: 'Kitchen Designs',
      text: 'Cook up inspiration in a kitchen that is both functional and beautiful. Our designs cater to your culinary needs while adding a touch of sophistication.',
    },
    {
      id: 5,
      image: CupBoard,
      heading: 'Cupboard Designs',
      text: 'Maximize space and organization with our versatile cupboard designs. From classic to contemporary, find the perfect solution for your storage needs.',
    },
    {
      id: 6,
      image: Ceiling,
      heading: 'Ceiling Designs',
      text: 'Look up and be captivated by our ceiling designs that redefine the beauty of your space. Turn ordinary ceilings into works of art that inspire.',
    },
  ];

export default function Category() {
  const alignCenter = { display: 'flex', alignItems: 'center' };
  
  return (
    <div>
      <div className={styles.background} />

      <Parallax pages={7}>
        <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
          <p className={`category-heading ${styles.scrollText}`}>Explore Our Categories</p>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1, end: 3 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className={`${styles.card} ${styles.sticky}`}>
            <p>Variety Of Designs For You</p>
          </div>
        </ParallaxLayer>

        {categoryData.map((category, index) => (
          <ParallaxLayer key={category.id} offset={index + 1.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
            <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
              <img className='category-img' src={category.image} alt={category.heading} />
            </div>
          </ParallaxLayer>
        ))}
      </Parallax>
    </div>
  )
}
