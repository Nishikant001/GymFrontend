import React from 'react'
import './course1.css'
import { LuWaves } from "react-icons/lu";
import Card2 from './Card2';
import data2 from './cou'
// import Nav2 from './Nav2';
import Nav3 from './Nav3';

function Course1() {
  return (
    <>
     <Nav3/>
    
    <div className='e'>
        <h3 className='e1'>CHOOSE <span className='e12'>PROGRAM</span></h3>
        <LuWaves className='e2' />
        <p className='e3'> Training Studio is free CSS template for gyms and fitness centers. You are <span className='e31'> allowed to use this layout for your business website.</span></p>
        <div className="e4">
            {data2.map((e)=>{
              return(
                <Card2 key={e.id} headin={e.headin} para={e.para1}/>
              )
            })}
        </div>

      
    </div>
   
    </>
  )
}

export default Course1
