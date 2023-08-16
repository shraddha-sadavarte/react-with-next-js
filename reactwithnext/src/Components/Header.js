import React from 'react';
import './Header.css'

const Header = (props) => {
  return (
    <>
    <div className='nav'>
      <h1>{props.user}</h1>
      <div className='nav-part2'>
        <h4>About</h4>
        <h4>Services</h4>
        <h4>Blog</h4>
        <h4>Contact</h4>
        <button className='btn'>Log In</button>
      </div>
    </div>
    </>
  )
}

export default Header
