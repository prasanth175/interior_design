import React from 'react'
import Navbar from '../Navbar'

import './index.css'
import HomeCarousel from '../HomeCarousel'
import Contact from '../Contact'
import Footer from '../Footer'
import CategoriesSection from '../Categories'
import AboutUs from '../AboutUs'

const Home = () => {
  return (
    <div className='home-container'>
        <Navbar />
        <HomeCarousel />
        <AboutUs />
        <CategoriesSection />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home