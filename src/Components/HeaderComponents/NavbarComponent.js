import React from 'react';
import { Link } from 'react-router-dom';
import "./NavbarComponent.css";

function NavbarComponent() {
  return (
    <div className='header' >
      
      <Link className='link' to="/">
        {/* <img src={logo} alt="logo" /> */}
        <h2 className="titleTask" >#Task 1</h2>
      </Link>
      <Link className='link' to="/">Home</Link>
      <Link className='link' to="/transaction">Transaction</Link>
      <Link className='link' to="/transfer">Transfers</Link>

      {/* <Link className='link' to="/interests">My Interests</Link>
      <Link className='link' to="/contact">Contact</Link> */}
      {/* <Link className='link' to="/login">login</Link> */}
    </div>
  )
}

export default NavbarComponent;