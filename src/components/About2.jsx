import React , { useEffect } from 'react'
import './about2.css'
import img1 from "./images/img1.jpg";
import AOS from "aos";
import 'aos/dist/aos.css';

function About2() {
    useEffect(()=>{
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100
        })
    })
    
  return (
    <div className='d' data-aos="fade-up">

        <img src={img1} alt="" height={500} width={400} data-aos="zoom-out" data-aos-duration="5000" />
      <h3 className="d1">About Us</h3> 
      <p className='d2' data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="1000"
     data-aos-duration="1000"> <q>Welcome to Monster Gym, where fitness meets determination and every workout transforms into a triumph. Founded with a vision to empower individuals of all levels to unleash their inner strength, Monster Gym is more than just a fitness center – it's a community driven by passion, perseverance, and the pursuit of excellence. Our state-of-the-art facilities, expert trainers, and diverse range of classes cater to every fitness goal, whether you're a seasoned athlete or just starting your journey. Join us as we redefine fitness and inspire greatness, one workout at a time.</q> <br /><br />
        <q>At Monster Gym, we believe in the power of transformation – both physical and mental. Our mission is to provide a supportive environment where our members can push their limits, break barriers, and achieve their fitness aspirations. From high-intensity workouts to mindful yoga sessions, our comprehensive approach to fitness ensures that there's something for everyone. But it's not just about the sweat and the reps; it's about the sense of accomplishment, the camaraderie, and the sheer joy of becoming the best version of yourself. So come, be a part of the Monster Gym family, where every challenge is an opportunity to grow stronger, fitter, and more unstoppable than ever before.</q>      
      </p> 
      
    </div>
  )
}

export default About2
