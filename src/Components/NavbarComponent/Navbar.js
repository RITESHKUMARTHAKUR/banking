import React from 'react';
import "./Navbar.css";
import { FaFacebookSquare,FaInstagramSquare,FaGithubSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className='main-nav' >
         {/* 1st logo part */}
        <div className='logo'>
          <h2>#Task 1</h2>
        </div>

        {/* 2nd menu part  */}
        <div className="menu-link">
          <ul>
            <li>
              <Link className='text-none' to="/">Home</Link>
            </li>
            <li>
            <Link className='text-none' to="/transaction">Transactions</Link>
            </li>
            <li>
            <Link className='text-none' to="/">Summary</Link>
            </li>
          </ul>
        </div>

        {/* 3rd media link */}
        <div className="social-media">
        <ul className='social-media-desktop'>
          <li>
            <a href="https://www.youtube.com/" target="__blank" ><FaFacebookSquare/></a>
          </li>
          <li>
          <a href="https://www.linkedin.com/in/ritesh-kumar-thakur-000209203/" target="__blank" ><FaInstagramSquare/></a>
          </li>
          <li>
          <a href="https://github.com/RITESHKUMARTHAKUR" target="__blank" ><FaGithubSquare/></a>
          </li>
        </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar ;