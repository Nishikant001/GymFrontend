import React, { useState } from "react";
import "./nav3.css";
import { NavLink, useNavigate  } from "react-router-dom";


import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Nav3() {
  let navigate= useNavigate()
  const [show, setShow] = useState(false);

  const handleNavigate=()=>{
    navigate('/', { replace: true }) 
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="a" id="">
       
      <Button variant="" onClick={handleShow} className="a1 a12" id="a1">
      <div >
          <p className="a2"></p>
          <p className="a2"></p>
          <p className="a2"></p>
      </div>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         
<div className="a3" id="a2">
            <ul type="none" >
              <NavLink className='NavLink' to="/main">
                <li>Home</li>
              </NavLink>
              <NavLink to="/about" className='NavLink'>
                <li>About</li>
              </NavLink>
              <NavLink to="/course" className='NavLink'>
                <li>Courses</li>
              </NavLink>
              <NavLink to="/gallery" className='NavLink'>
                <li>Gallery</li>
              </NavLink>

              <NavLink to="/contact" className='NavLink'>
                <li>Contact</li>
              </NavLink>
             
                <li className='NavLink' onClick={handleNavigate} >LogOut</li>
             
             
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    
     

      <div className="a4">
        MON<span className="a41">STER</span>
      </div>
      <p className="a5">MONSTER GYM</p>
      <button className="a6">Scroll Down</button>
    </div>
  );
}
// import "./nav2.css";
export default Nav3;









































