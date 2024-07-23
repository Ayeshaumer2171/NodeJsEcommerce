import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'

const AddProducts=()=>{
  
  const [name,setName]=useState('');
  const [price,setPrice]=useState('');
  const [category,setCategory]=useState('');
  const [company,setCompany]=useState('');
const [error,setError]=useState(false);

const addProduct=async()=>{

  console.warn(name,price,category,company)

  if(!name|| !price || !category|| !company){
    setError(true)
    return false;
  }

const userId=JSON.parse(localStorage.getItem('users'))._id;
 let result=await fetch("http://localhost:5000/add_product",{
  method:'post',
  body:JSON.stringify({name,price,category,company,userId}),
  headers:{
      'Content-Type':'application/json'
  }
});

result=await result.json();
    console.log(result);


}

    return(
<div className='product'>
<h2>Add products</h2>
<input type='text' placeholder='enter name' value={name} className='inputBox' onChange={((e)=>{setName(e.target.value)})}/>
{error && !name && <span className='invalid'>enter valid name</span>}

<input type='text' placeholder='enter price' value={price} className='inputBox' onChange={((e)=>{setPrice(e.target.value)})}/>
{error && !price && <span className='invalid'>enter valid price</span>}

<input type='text' placeholder='enter category' value={category} className='inputBox' onChange={((e)=>{setCategory(e.target.value)})}/>
{error && !category && <span className='invalid'>enter valid category</span>}

<input type='text' placeholder='enter company' value={company} className='inputBox' onChange={((e)=>{setCompany(e.target.value)})}/>
{error && !company && <span className='invalid'>enter valid company</span>}

<button type='button' onClick={addProduct} className='signup_btn'>Add Product</button>
</div>
  )
}
export default AddProducts;