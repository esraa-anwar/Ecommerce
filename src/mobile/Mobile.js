import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
 class Fashion extends Component {
    render() {
        return (
        
           <div className="roo">
               <ul>
              <li><a><NavLink to="Iphone">iphone</NavLink></a></li>
              <li><a><NavLink to="Sumsung">sumsung</NavLink></a></li>
              <li><a><NavLink to="Oppo">Oppo</NavLink></a></li>
             

            
            </ul>
            </div>
           
        )
    }
}

export default Fashion
