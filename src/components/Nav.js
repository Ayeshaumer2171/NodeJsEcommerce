import React, { useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import logo from '../logo.png';

const Nav=()=>{
  
    const auth=localStorage.getItem('users');
const navigate=useNavigate();

const logout=()=>{
 localStorage.clear();
navigate('/signup')
}
    return(
<div>
    <img src={logo} alt='logo loading' className='logo_img' />
    {auth?
    <ul className='nav-ul'>

        <li><Link to='/'>Products</Link></li>
        <li><Link to='/add'>Add Products</Link></li>
        <li><Link to='/update'>Update Products</Link></li>
        <li></li>

        <li></li>
        <li><Link to='/profile'>Profile </Link></li>
        <li><Link to='/signup'onClick={logout}>LogOUt ({JSON.parse(auth).name})</Link></li>
    </ul>
    :
<li className='nav-ul'>
<li><Link to='/signup'>SignUp </Link></li>
<li><Link to='/login'>Login</Link></li>
</li>
}
</div>
  )
}
export default Nav;