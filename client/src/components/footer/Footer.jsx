import React from 'react'
import './Footer.scss'
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { FaCreativeCommonsSamplingPlus } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
        <div className="contact">
          <div className="item">
            <h2>WinGlo</h2>
            <span>ABC Street World <br /> Tokyo Japan Zipcode</span>
            <span><BsFillTelephoneInboundFill /> +0 11 1234 1234</span>
            <span><FaCreativeCommonsSamplingPlus /> info@winglo.com</span>
          </div>
        </div>
        <div className="items">
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on Liverr</span>
            <span>Buying on Liverr</span>
            <span>Trust & Safety</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Podcast</span>
            <span>Become a Seller</span>
            <span>Community Standards</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Liverr Select</span>
            <span>ClearVoice</span>
            <span>Liverr Workspace</span>
            <span>Learn</span>
            <span>Working Not Working</span>
          </div>
        </div>
        </div>
        <hr />
        <div className="bottom">
          <div className='inclusive'>
          <div className="left">
            <span>Copyright 2023</span>
            <span>© Fiverr International Ltd. 2023</span>
          </div>
          <div className="center">
            <span>Terms of Services</span>
            <span>Privacy Policy</span>
            <span>Support</span>
          </div>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/twitter.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer