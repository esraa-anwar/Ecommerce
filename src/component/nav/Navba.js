import React from 'react'
import"../../customs.scss"
import Auth from './Auth'
import'./Style.css'
//import { Navbar,Nav,Form,FormControl,Button } from 'react-bootstrap'
const Navba=()=>{

return(
<nav className="navbar navbar-fixed-top navbar-expand-lg navbar-light  bg-company-red">
  <a class="navbar-brand" href="#">Esraa.</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="nav navbar-nav ">
      <li class="nav-item active">
        <a class="nav-link" href="#"> HOME <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">SHOP</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">ELEMENT</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">PAGE</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">PLOG</a>
      </li>
    
      <span class="navbar-text">
      <Auth/>
    
    

    </span>
    </ul>
  </div>
</nav>
)

}
export default Navba
/*  /* <FormControl type="text" placeholder="Search" className="sm-2" />
      <Button variant="inline-primary">Search</Button>*/