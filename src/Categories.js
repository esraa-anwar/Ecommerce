import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
//import Fashion from './Fashion'

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
            <nav className="nav.wrapper grey darken-1 "> 
            <div className="container " >
            <ul className="">
            <li><NavLink to="/All">All category</NavLink> </li>
            <li><NavLink to="/Fashion">fashion</NavLink> </li>
            <li> <NavLink to="/Supermarket">Supermarket</NavLink></li> 
               <li><NavLink to="Mobile">Mobile</NavLink> </li>
               <li><NavLink to="Tv">Tv</NavLink> </li>
               <li><NavLink to="Home">Home</NavLink> </li>
              <li> <NavLink to="Toys">Toys</NavLink> </li>
               <li><NavLink to="Sports">Sports</NavLink> </li> 
            </ul>
            </div>
            </nav>
        )
    }
}

export default Categories
/*<li> <NavLink to="">All Categories</NavLink> </li>
              
            <li> <NavLink to=""><Route path="" component={Supermarket}>Supermarket</Route></NavLink></li> 
               <li><NavLink to=""><Route path="" component={Mobile}>Mobile</Route></NavLink> </li>
               <li><NavLink to=""><Route path="" component={Tv}>Tv</Route></NavLink> </li>
               <li><NavLink to=""><Route path="" component={Home}>Home</Route></NavLink> </li>
              <li> <NavLink to=""><Route path="" component={Toys}>Toys</Route></NavLink> </li>
               <li><NavLink to=""><Route path="" component={Sports}>Sports</Route></NavLink> </li> */