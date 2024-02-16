import React,{useState} from 'react'
import './login.css'
import { Link, json, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
let URL='https://gymbackend63.onrender.com'

function Login() {
   let navigate=useNavigate()
    let[log,setLog]=useState({
       
        email:'',
       
        password:''
       
    })

    function handleChange(e) {
        setLog({
            ...log,[e.target.name]:e.target.value
            
        })

        
    }
   async function  handleLogin(e) {
    e.preventDefault()
    try {
        
        
        // let {email,password}=log
        let responce=await fetch(`${URL}/api/user/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(log)
            

        })
       
        // localStorage.setItem('user1',JSON.stringify(responce))
        if (! responce.ok) {
            toast.error('Invaild credential')
            console.log(responce.status)
           
            
           
            
        }else{
            let wow= await responce.json()
            localStorage.setItem('user1',JSON.stringify(wow))
            toast.success('Login Sucessfully')
            // console.log(wow)
            // navigate()
            
            navigate('/main',{replace:true})
            
            
        }

        
    } catch (error) {
        console.log(error)
       
        
    }
       
        
    }
   
  return (
    <div className='m'>
        <ToastContainer/>
        <h3 className="m2">Login Section</h3>
        <form action="" className='m1'  method="POST" onSubmit={handleLogin}>
        {/* <input type="text" name="name" id="sign1" placeholder="Name" className="l3" onChange={handleChange} value={sign.name}required/><br /><br /> */}
            <input type="email" name="email" id="log1" placeholder="email" className="m3" onChange={handleChange} value={log.email} required/><br /><br />
            {/* <input type="number" name="phone" id="sign3" placeholder="Phone" className="l3" onChange={handleChange} value={sign.phone} required/><br /><br /> */}
            {/* <input type="text" name="username" id="sign4" placeholder="username" className="l3" onChange={handleChange} value={sign.username} required/><br /><br /> */}
            <input type="password" name="password" id="log2" placeholder="password" className="m3" onChange={handleChange} value={log.password} required/><br /><br />
            {/* <input type="password" name="Cpassword" id="sign6" placeholder="confirm password" className="l3" onChange={handleChange} value={sign.Cpassword} required/><br /><br /><br /><br /> */}
            <button className="m4" >LogIn</button>
            <p className='m5'>Don't have any account ?</p>
            <Link to='/signup'><p className="m5 m6" >SignUp</p></Link>
        </form>
      
    </div>
  )
}

export default Login
