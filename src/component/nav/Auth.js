import React from 'react'
import {NavLink} from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
const Auth=()=>{
    

return(
  
  
  
  
  <ul  class="blue-text">
  
<li class="nav-item ">  <FaTwitter/></li>

<li class="nav-item "><FaFacebookF/></li>
     
<li class="nav-item "> <NavLink to="/">   <FaShoppingCart/> Cart</NavLink></li>

   </ul>
)

}
export default Auth
/* <nav class="navbar fixed-top navbar-expand-sm navbar-light white scrolling-navbar">
    <div class="container">

     
      <a class="navbar-brand waves-effect" href="" target="_blank">
        <strong class="blue-text">Souq</strong>
      </a>

    
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

     
      <div class="collapse navbar-collapse" id="navbarSupportedContent">

     
        <ul class="navbar-nav mr-auto">
          <li class="nav-item ">
            <a class="nav-link waves-effect" href="/Categories">Categories
              
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link waves-effect" href="" target="_blank">About </a>
          </li>
         
         
        </ul>

    
        <ul class="navbar-nav nav-flex-icons">
          
          <li class="nav-item">
            <a href="" class="nav-link" target="_blank">
            <FaFacebookF/>
            </a>
          </li>
          <li class="nav-item">
            <a href="" class="nav-link waves-effect" target="_blank">
           <FaTwitter/>
            </a>
          </li>
        
          <li class="nav-item">
            <a href="" class="nav-link waves-effect" target="_blank">
            <FaShoppingCart/> Cart
            </a>
          </li>
         
        </ul>

      </div>

    </div>
  </nav>
       */ 