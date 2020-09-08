import React , { Component }  from 'react'
import "./fashion.css";
import Data from "../Data"
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { FaHeart} from 'react-icons/fa'

import "./fashion.css"

 

class Women extends Component {
  
 
    render() {
    
     
        return (
          <div className="container" >
        
            { Data.women.map((women,i) => { 
              return (
              
           <div className="container">
            <div class="row">
            <div class="col-lg-3 col-md-3 mb-3">
                   <div className="card">
        
                 
                     <div class="view overlay">
                       <img src={women.image} class="card-img-top" alt=""></img>
                       <a>
                         <div class="mask rgba-white-slight"></div>
                       </a>
                     </div>
                
        
         
                     <div class="card-body text-center">
        
                        
                    
                       <h5>
                         <strong>
                           <Link to="">{women.name}
                             <span class="badge badge-pill danger-color">NEW</span>
                             </Link>
                         </strong>
                       </h5>
        
                       <h4 class="font-weight-bold blue-text">
          <strong>{women.price}</strong>
                       </h4>
                       <Link to=""><FaShoppingCart className="icon"/></Link>

<Link><FaHeart className="icon"/></Link>

                     </div>
                
        
                   </div>
              
                   </div>
             </div>
             </div>
 )})}

          </div>
        
            )}}
    
export default Women
