import React from "react";
import {Navbar , Container , NavDropdown , Collapse , Nav } from 'react-bootstrap';
import './Navbars.css';
import logo from '../../Assets/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faSearch, faArrowLeft } from '@fortawesome/free-solid-svg-icons'




const Navbars =  () => {
    return(
    
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand >
            <img src={logo} title="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="active" >Home</Nav.Link>
              <NavDropdown title="Pages" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Our Team</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">FAQ's</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Booking</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Error 404</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Login / Register</NavDropdown.Item>

              </NavDropdown>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Services</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Services Details</NavDropdown.Item>
 
              </NavDropdown>
              <NavDropdown title="Blog" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Blogs</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Blog Details</NavDropdown.Item>

              </NavDropdown>
              <Nav.Link >Contact Us <span>  </span></Nav.Link>
              <Nav.Link >  <FontAwesomeIcon icon={faSearch} /></Nav.Link>
              <Nav.Link >
              <FontAwesomeIcon icon={faPhone} />  
               (+01) 999 888 777 </Nav.Link>

              <Nav.Link>
                <button>Contact Us <span> <FontAwesomeIcon icon={faArrowLeft } /></span></button>
              </Nav.Link>



              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
   


    );


}
export default Navbars;