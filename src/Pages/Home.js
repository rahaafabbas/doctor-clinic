import React from 'react';
import headerImg from '../Assets/doc.jpg'
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faCircle , faTriangleCircleSquare } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    return(
        <header>

          <div className='container'>

            <div className='row'>
                <div className='col-md-6 col-lg-6'>
                <FontAwesomeIcon icon={faSquare} /> 
                <div className='circle'> <FontAwesomeIcon icon={faCircle} /></div> 

                    <h5>We Provide All Health Care Solution </h5>
                    <h2>Protect Your Health And Take Care Of Your Health </h2>

                    <button><a href="#">Read More</a></button>
                    <span>+</span>
                    

                </div>
                
                <div className='col-lg-6 col-md-6'>
                  
                    <div className='header-box' >
                       <img src={headerImg} />
                       
                    </div>
                 </div>
                  
                     
                </div>
            </div>
        
           
           
          
        </header>

    )
}

export default Home;