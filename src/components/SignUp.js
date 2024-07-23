import React,{useEffect, useState,} from 'react';
import {useNavigate} from 'react-router-dom';

const SignUp=()=>{

const [name,setName]=useState(" ");
const [pass,setPass]=useState(" ");
const [email,setEmail]=useState("");

const navigate=useNavigate();

    useEffect(()=>{
        const auth=localStorage.getItem('users');
if(auth){
    navigate('/');
}
    })


const CollectData=async()=>{

    console.log(name,email,pass);
    let result=await fetch('http://localhost:5000/register',{
        method:'post',
        body:JSON.stringify({name,email,pass}),
        headers:{
            'Content-Type':'application/json'
        }
    });
    result=await result.json();
    console.log(result);
localStorage.setItem('users',JSON.stringify(result.result));
localStorage.setItem('token',JSON.stringify(result.auth));

    if(result){
        navigate('/');
    }
}

return(
    <div className='register'>
            <h2>Register</h2>
            <input type='text' placeholder='enter name' className='inputBox' value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <input type='text' placeholder='enter email' className='inputBox' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <input type='password' placeholder='enter password' className='inputBox' value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
            <button className='signup_btn' type='button' onClick={CollectData}>SignUp</button>

    </div>
)
}
export default SignUp;