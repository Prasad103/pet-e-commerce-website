import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {
    
    const [menu,setMenu] = useState("shop");
    
  return (
    <div className='navbar'>
        <div className="nave-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("cat")}}>Cat{menu==="cat"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("dog")}}>Dog{menu==="dog"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("horse")}}>Horse{menu==="horse"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart_icon} alt="" />
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar