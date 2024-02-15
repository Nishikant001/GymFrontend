import React from 'react'
import './basic.css'
import Card3 from './Card3'
import a from './Cdata'
import Nav3 from './Nav3'


function Basic() {
  return (
    <>
    <Nav3/>
    <div className='g'>
      {/* <h3 className="g1">Co</h3> */}
      {a.map((e)=>{
        return(
        <Card3 key={e.id} plan={e.plan} pm={e.pm} depo={e.depo} />
        )
      })}
    
    </div>
    </>
  )
}

export default Basic
