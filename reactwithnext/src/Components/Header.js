import Link from 'next/link';
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <>
    <div className='nav'>
      <h1>Logo</h1>
      <div className='nav-part2'>
        <Link href="/" className='link'>Home</Link>
        <Link href="/About" className='link'>About</Link>
        <Link href="/Services" className='link'>Services</Link>
        <Link href="/Contact" className='link'>Contact</Link>
        <button className='btn'>Log In</button>
      </div>
    </div>
    </>
  )
}

export default Header
