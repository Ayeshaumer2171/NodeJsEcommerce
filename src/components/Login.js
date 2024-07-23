import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'

const Login=()=>{
  
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');

const navigate=useNavigate();

useEffect(()=>{
    const auth=localStorage.getItem('users');
if(auth){
navigate('/');
}
})


const handleLogin=async()=>{
    let result=await fetch('http://localhost:5000/login',{
        method:'post',
        body:JSON.stringify({email,password}),
        headers:{
            'Content-Type':'application/json'
        }
    });;

result=await result.json();
console.warn(result);

if(result.auth){
    localStorage.setItem('users',JSON.stringify(result.user));
    localStorage.setItem('token',JSON.stringify(result.auth));

    navigate('/')

}else{
    alert("not correct result");
}
}

    return(
<div>
    <div className='login'>
            <h2>Login</h2>
            <input type='text' placeholder='enter email' className='inputBox' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            <input type='password' placeholder='enter password' className='inputBox' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            <button className='signup_btn' type='button' onClick={handleLogin}>Login</button>

    </div>
</div>
  )
}
export default Login;