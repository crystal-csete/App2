/** @format */

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footerlinks'>
      <ul>
        <li>
          <strong>&#169; 2021 Crystal's Pages</strong>
        </li>

        <li>
          <a href='#contactus'>Contact Us</a>
        </li>
        <li>
          <a href='#security'>Security</a>
        </li>
        <li>
          <a href='#geninfo'>General Info</a>
        </li>
        <li>
          <a href='#policy'>Your Policy</a>
        </li>
        <div className='logo'></div>
        <li>
          <a href='#store'>Store</a>
        </li>
        <li>
          <a href='#careers'>Careers</a>
        </li>
        <li>
          <a href='#faq'>FAQ</a>
        </li>
        <li>
          <a href='#policy'>About</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
