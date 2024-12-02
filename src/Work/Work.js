import React from "react";
import './Work.css'
import { Accordion, AccordionBody, AccordionHeader } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Work = () => {
 return(
    <work>
        <h6>Working Proccess</h6>
        <h2>How WE Work?</h2>
        <div className="container">
       
            <div className="container">
                <div className="row">
                    <div className=" col-lg-4 col-sm-6">
                   <div className="Accordion"> 
                    <Accordion>
                    <AccordionHeader>01</AccordionHeader>
            <AccordionBody><h3>Make Appointment</h3>
            <h6>It is a long established fact that a reader will be dsitructed by the readable content </h6>
             <div className="insidebtn"><button>View More <FontAwesomeIcon icon={faArrowRight} /></button></div>
            </AccordionBody>
                    </Accordion>
                    </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                    <div className="Accordion"> 
                     
                     <Accordion>
                    <AccordionHeader>02</AccordionHeader>
            <AccordionBody><h3>Take Treatment</h3>
            <h6>It is a long established fact that a reader will be dsitructed by the readable content </h6>
            <div className="insidebtn">
             <button>View More <FontAwesomeIcon icon={faArrowRight} /></button></div>
            </AccordionBody>
            </Accordion>
            </div>
                    </div>
                    <div className=" col-lg-4 col-sm-6">  
                      <div className="Accordion"> 
                         <Accordion >
                       <AccordionHeader>03</AccordionHeader>
            <AccordionBody><h3>Registeration</h3>
            <h6>It is a long established fact that a reader will be dsitructed by the readable content </h6>
            <div className="insidebtn"><button>View More <FontAwesomeIcon icon={faArrowRight} /></button></div>
            </AccordionBody>
            </Accordion>
            </div></div>

                </div>
            </div>
           
            </div>
       
            
           
    </work>
        
);
}
export default Work;