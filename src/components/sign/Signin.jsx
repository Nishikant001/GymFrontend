import React , { useState } from 'react'
// import Nav3 from '../Nav3'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './sign.css'
import { useNavigate } from 'react-router';

const Signin = (props) => {
    let navigate=useNavigate()
    
    let[sign,setSign]=useState({
        name:'',
        email:'',
        phone:'',
        username:'',
        password:'',
        Cpassword:''
    })

    function handleChange(e) {
        setSign({
            ...sign,[e.target.name]:e.target.value
            
        })
        
    }
     async function handleSubmit(e){
        try {
        e.preventDefault()


        // console.log(sign)
        let password1=document.getElementById('sign5').value
        let confirm=document.getElementById('sign6').value
        let number=document.getElementById('sign3').value
        let email1=document.getElementById('sign2').value
        

        if(! email1.endsWith('@gmail.com')){
            toast.error('invaild email')
        }else if(number.length !=10){
            toast.error('number should be 10 character')
        }else if(password1!==confirm){
            toast.error("password dosen't match")
        }else{
         
        let {name,email,phone,username,password}=sign
        let data=await fetch(`http://localhost:7000/api/user/signup`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
                },
            body:JSON.stringify({name,email,phone,username,password})
            
           
           

            

        })
        

     
            let data1=await data.json()
        localStorage.setItem('user',JSON.stringify( data1))
            toast.success('Register Sucessfull')
            navigate('/login',{replace:true})
            
       
    }
        
        // console.log(res)
            
        } catch (error) {
            console.log(error)
            
        }
        
    }
  return (
    <>
   
    <div className='l'>
        <ToastContainer/>
        <h3 className='l2'>SignUp</h3>
    <form action="" onSubmit={handleSubmit} className='l1'>


            <div className='l5'></div>
            <input type="text" name="name" id="sign1" placeholder="Name" className="l3" onChange={handleChange} value={sign.name}required/><br /><br />
            <input type="email" name="email" id="sign2" placeholder="email" className="l3" onChange={handleChange} value={sign.email} required/><br /><br />
            <input type="number" name="phone" id="sign3" placeholder="Phone" className="l3" onChange={handleChange} value={sign.phone} required/><br /><br />
            <input type="text" name="username" id="sign4" placeholder="username" className="l3" onChange={handleChange} value={sign.username} required/><br /><br />
            <input type="password" name="password" id="sign5" placeholder="password" className="l3" onChange={handleChange} value={sign.password} required/><br /><br />
            <input type="password" name="Cpassword" id="sign6" placeholder="confirm password" className="l3" onChange={handleChange} value={sign.Cpassword} required/><br /><br /><br /><br />
            <button className="l4">Register</button>
            
        </form>
      
    </div>
    </>
  )
}

export default Signin
