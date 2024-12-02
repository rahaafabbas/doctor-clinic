import React from 'react';
import footerlogo from '../../Assets/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPhone, faWaveSquare } from '@fortawesome/free-solid-svg-icons';
import facebook from '../../Assets/facebook.jpg';
import instagram from '../../Assets/Instagram.png';
import twitter from '../../Assets/Twitter.jpeg';
import linkedin from '../../Assets/linkedin.jpg';



const Footer = () => {
    return(
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3 col-sm-6 ' >
                        <img src={footerlogo}  className='footerlogo'/>
                        <p>Lorem ipsum is dolor sit amet, csectetur adipiscing elit,
                         dolore smod tempor incididunt ut labore et.</p>
                         <div className='footer-contact'>
                           <div className='footer-icon'>
                            <FontAwesomeIcon icon={faPhone} /> 
                           </div>
                           <div className='footer-text'>
                             <h6> Contact Us </h6>
                             <h4>+01 123 456 7890 </h4>
                           </div>
                         </div>
                    </div>
                    <div className='col-md-3 col-sm-6 ' >
                        <h2> Quick Links</h2>
                        <FontAwesomeIcon icon={faWaveSquare} /><FontAwesomeIcon icon={faWaveSquare} /><FontAwesomeIcon icon={faWaveSquare} /><FontAwesomeIcon icon={faWaveSquare} />
                       <FontAwesomeIcon icon={faWaveSquare} />
                        
                        <ul>
                            <li><a href='#'> Home</a></li>
                            <li><a href='#'> About</a></li>
                            <li><a href='#'> Blog</a></li>
                            <li><a href='#'> Booking</a></li>
                            <li><a href='#'> Faq's</a></li>
                            <li><a href='#'> Blogs</a></li>
                            <li><a href='#'> Our Team</a></li>
                            <li><a href='#'> Services</a></li>
                            <li><a href='#'> Home</a></li>

                        </ul>
                    </div>
                    <div className='col-md-3 col-sm-6 ' >
                    <h2> Our Services</h2>
                    <FontAwesomeIcon icon={faWaveSquare} /><FontAwesomeIcon icon={faWaveSquare} /><FontAwesomeIcon icon={faWaveSquare} /><FontAwesomeIcon icon={faWaveSquare} />
                       <FontAwesomeIcon icon={faWaveSquare} />
                        
                        
                        <ul>
                            <li><a href='#'> Dental Care</a></li>
                            <li><a href='#'> Cardiac Clinic</a></li>
                            <li><a href='#'> Massege Therapy</a></li>
                            <li><a href='#'> Cardiology</a></li>
                            <li><a href='#'> Precise Diagnosis</a></li>
                            <li><a href='#'> Abmbulance Services</a></li>
                            <li><a href='#'> Our Team</a></li>
                            <li><a href='#'> Services</a></li>

                        </ul>
                    </div>

                    <div className='col-md-3 col-sm-6 ' >
                        <h2>Subscribe</h2>
                        <FontAwesomeIcon icon={faWaveSquare} /><FontAwesomeIcon icon={faWaveSquare} /><FontAwesomeIcon icon={faWaveSquare} /><FontAwesomeIcon icon={faWaveSquare} />
                       <FontAwesomeIcon icon={faWaveSquare} />
                        
                        <form>
                            <input type='email' placeholder='Enter e-mail' />
                            <button type='submit'>Subscribe Now</button>

                        </form>
                        <ul className='social'>
                          <li><a href="#"><img src={facebook} /></a></li>
                          <li><a href="#"><img src={instagram} /></a></li>
                          <li><a href="#"><img src={twitter} /></a></li>
                          <li><a href="#"><img src={linkedin} /></a></li>
                            


                        </ul>
                    </div>

                </div>

            </div>
         
            <div className='footer-bottom'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12'>
                            <span> Copyright © 2024 Design & Developed by ThemeTraders </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;