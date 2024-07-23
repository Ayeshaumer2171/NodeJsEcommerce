import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductsList=()=>{
  
const [products,setProducts]=useState([]);

useEffect(()=>{
    getProducts();
},[]);
//lists product
const getProducts=async()=>{
let result=await fetch('http://localhost:5000/products',{
    headers:{
        authorization:JSON.parse(localStorage.getItem('token'))
    }
});
result=await result.json();
setProducts(result);

}


//delete product
const deleteProduct=async(id)=>{

    let result=await fetch(`http://localhost:5000/products/${id}`,{
        method:"delete"
    })
    result=await result.json()
    if(result){
        getProducts();

    }
}

//search product
const searchHandle=async(event)=>{
    let key=event.target.value;
   if(key){
    let result=await fetch(`http://localhost:5000/search/${key}`)
   result=await result.json()
   if(result){
setProducts(result)
   }
   }else{
    getProducts();
   }
}

console.warn('producs',products);

    return(
<div className='product-list'>
<h2>Products Lists</h2>

{/* //search product */}
<input type='text' placeholder='search-product' className='search-product-box' onChange={searchHandle}/>

<ul>
    <li>S . No</li>
    <li>Name</li>
    <li>Price</li>
    <li>category</li>
    <li>Company</li>
    <li>Operation</li>
</ul>
{products.map((item,index)=>
<ul key={item._id}>
    <li>{index}</li>
    <li>{item.name}</li>
    <li>{item.price}</li>
    <li>{item.category}</li>
    <li>{item.company}</li>
    <li><button onClick={()=>deleteProduct(item._id)}>Delete</button>
    <Link to={"/update/"+item._id}>Update </Link>
    </li>
    </ul>
)}
</div>
  )
}
export default ProductsList;