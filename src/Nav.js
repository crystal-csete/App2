/** @format */

import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div>
      <nav>
        <ul>
          <div className='logo'></div>
          <div className='searchbar'>
            <input placeholder='Search' />
          </div>
          <li>
            <a href='#requests'>Requests</a>
          </li>
          <li>
            <a href='#troubleshooting'>TroubleShooting</a>
          </li>
          <li>
            <a href='#store'>Store</a>
          </li>
          <li>
            <a href='#links'>Links</a>
          </li>
          <li>
            <a href='#notifications'>🔔</a>
          </li>
          <li>
            <a href='#new'>🎨</a>
          </li>
          <li>
            <a href='#profile'>🤓</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
