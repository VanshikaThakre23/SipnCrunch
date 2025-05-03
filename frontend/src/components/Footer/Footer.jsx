import React from 'react'
import './Footer.css';
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" srcset="" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel doloremque dolores quas tempora architecto ex temporibus minima commodi quisquam saepe expedita quod cupiditate quaerat, veniam ipsum cumque minus veritatis cum?</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About-us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET in touch</h2>
                    <ul>
                        <li>+9440493203</li>
                        <li>sip@crunch.com</li>
                    </ul>
                   </div>
                </div>
                <hr/>
                <p className='footer-copyright'>Copyright 2025 SipNcrunch.com - All rights preserved </p>

            </div>

       
    )
}
import './Footer.css';
import { assets } from '../../assets/assets';
export default Footer
