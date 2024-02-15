import React from 'react'
import './card3.css'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

function Card3(props) {
  return (
    <motion.div className='h' whileHover={{
      scale: 1.1,
      transition:"all 2s ease"
     
    }} >
      <div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">{props.plan}</h5>
    <p class="card-text"> {props.pm} </p>
    <h5 class="card-title">{props.depo} </h5>
    <Link to="/contact" class="btn btn-primary">Contact Us</Link>
  </div>
</div>
    </motion.div>
  )
}

export default Card3
