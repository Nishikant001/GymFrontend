import React from 'react'
import './card.css'
// import Datal from './Data1'

function CardF(props) {
  return (
    <div className='c'>
        <div className="c3"><img src={props.image} alt=""height={77} width={77} /></div>
        <h3 className="c2">{props.heading}</h3>
        <p className='c1'>{props.para}</p>

      
    </div>
  )
}

export default CardF
