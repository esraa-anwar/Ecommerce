import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
//import Fashion from './Fashion'
import './Css.css'
/*import Tv from './Tv'
import Mobile from './Mobile'
import Toys  from './Toys'
import Supermarket  from './Supermarket'
import Home  from './Home'
import Sports  from './Sports'
import {Route} from "react-router-dom"*/
 class Categories extends Component {
    render() {
        return (
            
            <div  className="container" className="roo" >
            <ul className="">
           
            <li><NavLink to="/fashion/Fashion">fashion</NavLink> </li>
            <li> <NavLink to="./Super">Supermarket</NavLink></li> 
               <li><NavLink to="/mobile/Mobile">Mobile</NavLink> </li>
               <li><NavLink to="/Tv">Tv</NavLink> </li>
               <li><NavLink to="/Home">Home</NavLink> </li>
              <li> <NavLink to="/Toys">Toys</NavLink> </li>
               <li><NavLink to="/Sports">Sports</NavLink> </li> 
            </ul>
            </div>
        
        )
    }
}

export default Categories
