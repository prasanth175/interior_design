import React from 'react'
import Rotate from 'react-reveal/Rotate';

import './index.css'

const Navbar = () => {
  return (
    <Rotate top left duration={1500}>
    <nav className='navbar'>
        <h1 className='nav-heading'>DG</h1>
        <div className='nav-list'>
            <a href='#home' className='nav-link'><p className='nav-item'>Home</p></a>
            <a href='#categories' className='nav-link'><p className='nav-item'>Designs</p></a>
            <a href='#contact' className='nav-link'><p className='nav-item'>Contact</p></a>
        </div>
    </nav>
    </Rotate>
  )
}

export default Navbar