import React,{useState} from 'react'
import './login.css'
import { Link, json } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

function Login() {
    let logindata='https://gymbackend-2apj.onrender.com'
    let[log,setLog]=useState({
       
        email:'',
       
        password:''
       
    })

    function handleChange(e) {
        setLog({
            ...log,[e.target.name]:[e.target.value]
            
        })

        
    }
   async function Login(e) {
    try {
        e.preventDefault()
        // console.log(log)

        let {email,password}=log
        let logi=await fetch(`${logindata}/api/user/login`,{
            method:'POST',
            body:JSON.stringify({email,password}),
            headers:{
                "Content-Type":"application/json"
            }

        })
        logi= await logi.json
        localStorage.setItem('user1',JSON.stringify(logi))
        if (Response.ok) {
            toast.success('Login Sucessfully')
            
        }else{
            toast.error('Invaild credential')
        }
        
    } catch (error) {
        console.log(error)
       
        
    }
       
        
    }
   
  return (
    <div className='m'>
        <ToastContainer/>
        <h3 className="m2">Login Section</h3>
        <form action="" className='m1' onSubmit={Login}>
        {/* <input type="text" name="name" id="sign1" placeholder="Name" className="l3" onChange={handleChange} value={sign.name}required/><br /><br /> */}
            <input type="email" name="email" id="log1" placeholder="email" className="m3" onChange={handleChange} value={log.email} required/><br /><br />
            {/* <input type="number" name="phone" id="sign3" placeholder="Phone" className="l3" onChange={handleChange} value={sign.phone} required/><br /><br /> */}
            {/* <input type="text" name="username" id="sign4" placeholder="username" className="l3" onChange={handleChange} value={sign.username} required/><br /><br /> */}
            <input type="password" name="password" id="log2" placeholder="password" className="m3" onChange={handleChange} value={log.password} required/><br /><br />
            {/* <input type="password" name="Cpassword" id="sign6" placeholder="confirm password" className="l3" onChange={handleChange} value={sign.Cpassword} required/><br /><br /><br /><br /> */}
            <button className="m4">Register</button>
            <p className='m5'>Don't have any account ?</p>
            <Link to='/signup'><p className="m5 m6">SignUp</p></Link>
        </form>
      
    </div>
  )
}

export default Login
