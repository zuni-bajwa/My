 
 import React, { useRef } from "react";
import Home from "./Home1";
import './Login.css'

 const Login = () => {
    const email=useRef()
    const password=useRef()
    const getEmail=localStorage.getItem("emailData")
    const getPassword=localStorage.getItem("passwordData")
    const handleSubmit=()=>{
        if(email.current.value=="abc@gmail.com"&&password.current.value=="12345"){
            localStorage.setItem("emailData","abc@gmail.com")
            localStorage.setItem("passwordData","12345")
        }
    }
  return (
   <div className='login'> 
         <header>Login</header>
        <div class="container3">
        <div class="login form">
          {
        getEmail&&getPassword?
        <Home/>:
         <form action="#"  onSubmit={handleSubmit}>
           <input type="text" placeholder="Enter your email" ref={email}/>
           <input type="password" placeholder="Enter your password" ref={password}/>
          <button className="button">Login</button>
  
          </form>
}
       
      </div>
       </div>

   </div>
   
  )
}

export default Login

















 