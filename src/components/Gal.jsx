import React from 'react'
import './gal.css'
import Cardimg from './Cardimg'
// import Spinner from './Spinner'
import Nav3 from './Nav3'
import b from './img'

function Gal() {
  

  return (
    <>
     <Nav3/>
    <div className='i'>
      <h3 className="i1">Gallery Section</h3>
      <div className='j1'>
      {b.map((img)=>{
        return(
          <Cardimg  key={img.id} img={img.img}/>

        )
      }) }
      </div>
     
      {/* <Cardimg/> */}

      
    </div>
    </>
  )
}

export default Gal
