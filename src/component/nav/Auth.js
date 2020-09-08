import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaUserAlt} from 'react-icons/fa'
import { FaSearch} from 'react-icons/fa'
import { FaRegHeart} from 'react-icons/fa'
import'./Style.css'

class Auth extends Component {
 render() {
   return(
  
 
  
  
  <ul class="header__right__widget"  className="blue-text">
<li className="nav-item " ><Link><FaSearch className="icon"/></Link></li>
<li className="nav-item "><Link><FaRegHeart className="icon"/>
</Link></li>



<li className="nav-item "> <FaShoppingCart className="icon"/> </li>


   </ul>
)

}}
export default Auth