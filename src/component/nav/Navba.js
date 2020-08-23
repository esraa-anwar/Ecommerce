import React from 'react'
import"../../customs.scss"
import Auth from './Auth'
import'./Style.css'
import { Navbar,Nav,Form,FormControl,Button } from 'react-bootstrap'
const Navba=()=>{

return(
    
<div className="">

<nav className="navbar navbar-dark bg-company-red navbar-fixed-top" >
  <a class="navbar-brand" href="#" class="smoothScroll">    <img src="/img/hulk2.jpeg" width="120" height="40" ondragstart="return false;" alt="logo" />
</a>
  <Auth/>
</nav>




  
  
       
</div>

)

}
export default Navba
/*  /* <FormControl type="text" placeholder="Search" className="sm-2" />
      <Button variant="inline-primary">Search</Button>*/