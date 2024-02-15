import React from 'react'
import './nav2.css'
import { Link } from 'react-router-dom';
// import Signin from './sign/Signin';

function Nav2() {

  
  return (
    <div className='a' id=''>
     
    
      <div className='a4'>MON<span className='a41'>STER</span></div>
     
      <p className="a5" >MONSTER GYM</p>
    
      <Link to="/about"><button className='a6'>Get Started</button></Link>
      
      
    </div>
   
  )
}

export default Nav2
