import React from 'react'
import './nav.css'
// import AOS from "aos";
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';


function Nav() {
   
  
  return (
   
    <div className='a' id='home'>
      
      
      <div className='a4'>MON<span className='a41'>STER</span></div>
      <p className="a5" >MONSTER GYM</p>
      
      <Link to="/login"><button className='a6'>Login</button></Link>
    </div>
   
   
  
  )
}

export default Nav
