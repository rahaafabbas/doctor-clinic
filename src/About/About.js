import React from 'react';
import img1 from '../Assets/2dr.jpg';
import img2 from '../Assets/docchil.jpg';
import img3 from '../Assets/docgg.jpg';
import img4 from '../Assets/20.jpg';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquare, faBed,faDroplet,fa } from '@fortawesome/free-solid-svg-icons'



const About = () => {
    return(
        <about>
            <div className='container'>
                <div className='row'>
                    
                     <div className='col-lg-3'>
                        <img src={img1} />
                        <div className='img2'><img src={img2} /></div> 
                      </div>
                     <div className='col-lg-3'>
                        <div className='img3'><img src={img3} /></div>
                        <FontAwesomeIcon icon={faSquare} />
                        <div className='img4'>  <img src={img4} /> </div>
                        
                    </div>  
                        
                     <div className='col-lg-6 col-md-6'>
                        <a href='#'>About us</a>
                        <h2>The Great Place Of Medical Hospital Center</h2>
                        <p>We provide the special tips and advice's of health care treatment and high level of technology in our hospital</p>
                        <button>🚑Emergency Help </button>
                        <button><div className='first'><FontAwesomeIcon icon={faBed} /></div> Qualified Doctors</button>
                        <button><div className='second'><FontAwesomeIcon icon={faDroplet} /></div> Best Professionals</button>
                        <button>💉Medical Treatments</button>
                        <div className='last'><button>Read More</button></div>
                        </div>
                </div>
            </div>
        </about>
    );
}
export default About;