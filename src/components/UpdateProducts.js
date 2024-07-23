import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { useParams } from 'react-router-dom';

const UpdateProducts=()=>{
  
  const [name,setName]=useState('');
  const [price,setPrice]=useState('');
  const [category,setCategory]=useState('');
  const [company,setCompany]=useState('');

const params=useParams();
const navigate=useNavigate()

useEffect(()=>{
  getProductDetails()
},[])

const getProductDetails=async()=>{
  let result=await fetch(`http://localhost:5000/products/${params.id}`)
result=await result.json();
setName(result.name)
setPrice(result.price)
setCategory(result.category)
setCompany(result.company)

console.warn(result)
}

const UpdateProduct=async()=>{
console.warn(name,price,category,company)

let result=await fetch(`http://localhost:5000/products/${params.id}`,{
  method:'PUt',
  body:JSON.stringify({name,price,category,company}),
  headers:{
    'Content-Type':'application/json'
}})
result=await result.json();
console.warn(result);
navigate('/')
}

    return(
<div className='product'>
<h2>Update products</h2>
<input type='text' placeholder='enter name' value={name} className='inputBox' onChange={((e)=>{setName(e.target.value)})}/>

<input type='text' placeholder='enter price' value={price} className='inputBox' onChange={((e)=>{setPrice(e.target.value)})}/>

<input type='text' placeholder='enter category' value={category} className='inputBox' onChange={((e)=>{setCategory(e.target.value)})}/>

<input type='text' placeholder='enter company' value={company} className='inputBox' onChange={((e)=>{setCompany(e.target.value)})}/>

<button type='button' onClick={UpdateProduct} className='signup_btn'>Update Product</button>
</div>
  )
}

export default UpdateProducts;