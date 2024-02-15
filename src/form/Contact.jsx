import React, { useState } from "react";
import "./contact.css";
import Nav3 from "../components/Nav3";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    let[con,setCon]=useState({
        name:'',
        email:'',
        phone:'',
        comment:''
    })

    function handleChange(e) {
        setCon({
            ...con,[e.target.name]:[e.target.value]
            
        })
        
    }
    async function handleSubmit(e){
      try {
        e.preventDefault()
        console.log(con)
        let {name,email,phone,comment}=con
        let comm=await fetch('http://localhost:7000/api/user/contact',{
          method:'POST',
          body:JSON.stringify({name,email,phone,comment}),
          headers:{
            "Content-Type":"application/json"
          }
        })
        comm=await comm.json
        localStorage.setItem('user3',JSON.stringify(comm))
        // if(Response.ok){
          toast.success('message send sucessfully')
        // }else{
        //   toast.error('Please Fill Details Correctly')
        // }
        
      } catch (error) {
        console.log(error)
        
      }
       
       
        
    }
  return (
    <>
      <Nav3 />
      <div className="k">
        <ToastContainer/>
        <h3 className="k2">Contact Us</h3>
        <div className="k1">
        <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Electronic%20City+(Monster%20Gym)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe>
        </div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name="name" id="inp1" placeholder="Name" className="k3" onChange={handleChange} value={con.name} required/><br /><br />
            <input type="email" name="email" id="inp2" placeholder="email" className="k3" onChange={handleChange} value={con.email} required/><br /><br />
            <input type="number" name="phone" id="inp3" placeholder="Phone" className="k3" onChange={handleChange} value={con.phone} required/><br /><br />
            <input type="text" name="comment" id="inp4" placeholder="comments" className="k3" onChange={handleChange} value={con.comment} required/><br /><br /><br /><br />
            <button className="k4">Send</button>
            
        </form>
      </div>
    </>
  );
}

export default Contact;
