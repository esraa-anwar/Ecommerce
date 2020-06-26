import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
 class Fashion extends Component {
    render() {
        return (
        
           <div className="">
               <ul>
              <li><a><NavLink to="Women">Women</NavLink></a></li>
              <li><a><NavLink to="Men">Men</NavLink></a></li>
              <li><a>Watches</a></li>
              <li><a>FootWear</a></li>
              <li><a>Sports</a></li>
              <li><a><NavLink to="Bags">Bags</NavLink></a></li>
              <li><a>Kid&baby</a></li>

            
            </ul>
            </div>
           
        )
    }
}

export default Fashion
