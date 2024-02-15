import React , { useEffect } from 'react'
import './about.css'
import Card from './Card'
import Data1 from './Data1'
import About2 from './About2';
import AOS from "aos";
import 'aos/dist/aos.css';
// import { Link } from 'react-router-dom';
// import Nav from './Nav';
// import Nav2 from './Nav2';
import Nav3 from './Nav3';

function About() {
  useEffect(()=>{
    AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100
    })
})
  return (
    <>
    <Nav3/>
    
    <div className='b' id='b' data-aos="fade-zoom-in">
      
        <h3 className='b1'>Why Choose Us?</h3>
        <h2 className="b2">Push Your Limit Forword</h2>
        <div className="b3">
           {Data1.map((e)=>{
            return(
            <Card key={e.id} image={e.image} heading={e.heading} para={e.para}/>
          ) })}
        </div>
     
    </div>
    <About2/>
    </>
    

  )
}

export default About
