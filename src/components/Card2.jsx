import React from 'react'
import './card2.css'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

function Card2(props) {
  return (
    <motion.div className='f' whileHover={{
        scale: 1.1,
        transition:"all 2s ease",
        boxShadow: "10px 9px 10px -3px goldenrod",
      }} >
     
        <div className="f1">
            <img src="https://www.freepnglogos.com/uploads/dumbbell-png/dumbbell-sponsored-native-company-native-desc-6.png" alt="" height={100} width={100}/>


        </div>
        <p className='f2'>{props.headin}</p>
        <p className='f3'>{props.para}</p>
        <Link to="/basic" className='f4'> View Plan</Link>
      
    </ motion.div>
  )
}

export default Card2
