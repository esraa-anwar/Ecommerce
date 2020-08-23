import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import"./fashion.css"
 class Fashion extends Component {
    render() {
        return (
        
           <div className="roo">
               <ul>
              <li><NavLink to="Women">Women</NavLink></li>
              <li><NavLink to="Men">Men</NavLink></li>
              <li>Watches</li>
              <li>FootWear</li>
              <li>Sports</li>
              <li><NavLink to="Bags">Bags</NavLink></li>
              <li>Kid&baby</li>

            
            </ul>
            </div>
           
        )
    }
}

export default Fashion
