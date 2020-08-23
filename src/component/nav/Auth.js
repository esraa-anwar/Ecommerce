import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaUserAlt} from 'react-icons/fa'
import { FaHome} from 'react-icons/fa'
import { FaUserPlus} from 'react-icons/fa'
import'./Style.css'

class Auth extends Component {
 render() {
   return(
  
 
  
  
  <ul class="header__right__widget"  className="blue-text">
<li className="nav-item " ><Link><FaHome className="icon"/>Home</Link></li>
<li className="nav-item "><Link><FaUserPlus className="icon"/>Register
</Link></li>

<li className="nav-item "><Link><FaUserAlt className="icon"/>Login</Link></li>

<li className="nav-item "> <FaShoppingCart className="icon"/> </li>

   </ul>
)

}}
export default Auth