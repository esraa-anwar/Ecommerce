import React , { Component }  from 'react'

import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { FaHeart} from 'react-icons/fa'
import Data from '../../Data'

class Super extends Component {
    render() {
    
      return (
        <div className="container" >
      
          { Data.supermarket.map((sup,i) => { 
            return (
            
            <section class="text-center mb-4">
          <div class="row wow fadeIn">
          <div class="col-lg-3 col-md-3 mb-3">
                 <div className="card">
      
               
                   <div class="view overlay">
                     <img src={sup.image} class="card-img-top" alt=""></img>
                     <a>
                       <div class="mask rgba-white-slight"></div>
                     </a>
                   </div>
              
      
       
                   <div class="card-body text-center">
      
                      
                  
                     <h5>
                       <strong>
                         <Link to="">{sup.name}
                           <span class="badge badge-pill danger-color">NEW</span>
                           </Link>
                       </strong>
                     </h5>
      
                     <h4 class="font-weight-bold blue-text">
        <strong>{sup.price}</strong>
                     </h4>
                     <Link to=""><FaShoppingCart className="icon"/></Link>

<Link><FaHeart className="icon"/></Link>

                   </div>
              
      
                 </div>
            
                 </div>
           </div>
                 </section>
)})}

        </div>
      
          )}}
     
export default Super