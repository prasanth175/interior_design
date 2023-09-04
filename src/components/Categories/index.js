import React from 'react';
import Fade from 'react-reveal/Fade';
import Bed from '../../Images/bed.jpg';
import Kitchen from '../../Images/kitchen.jpg';
import Hall from '../../Images/hall.jpg';
import CupBoard from '../../Images/cupboard.jpg';
import Ceiling from '../../Images/ceiling.jpg';
import TV from '../../Images/tv.jpg';

import './index.css';


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
  

const CategoriesSection = () => {
  
  return (
     <div className="categories-section" id='categories'>
      <Fade top big cascade>
      <h2 className='category-heading'>Explore Our Categories</h2>
        </Fade>
      <div className="category-grid">
        {categoryData.map((category) => (
            category.id%2 !== 0 ? 
            <Fade key={category.id} left duration={600}>
          <div key={category.id} className="category">
            <img className='category-left-img' src={category.image} alt={category.heading} />
            <div className="category-content left-content">
              <h3>{category.heading}</h3>
              <p className='left-para'>{category.text}</p>
            </div>
          </div>
          </Fade> : 
          <Fade key={category.id} right duration={600}>
          <div key={category.id} className="category">
          <div className="category-content left-content">
            <h3>{category.heading}</h3>
            <p className='left-para'>{category.text}</p>
          </div>
          <img className='category-right-img' src={category.image} alt={category.heading} />
        </div>
        </Fade>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
