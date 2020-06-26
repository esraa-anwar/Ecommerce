import React from 'react'
import {Link} from 'react-router-dom'
import Auth from './Auth'


const Navbar=()=>{

return(
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
<div className="container " >

<Link to="" className="brand-logo" className="left" >Soaq</Link>

<Auth/>


</div>



    </nav>
       


)

}
export default Navbar