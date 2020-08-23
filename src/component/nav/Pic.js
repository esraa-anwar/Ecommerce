import React, { Component } from 'react'
import"./Style.css"
import{useEffect} from "react";
//import ParticlesBg from 'particles-bg'
//import {Animated} from "react-animated-css";
import "../../customs.scss"

import ParticlesBg from 'particles-bg'
class Pic extends Component {

  render () {
   
    return (<div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-3">Yellow</h1>
      <p class="lead">Enjoy Shopping</p>
    </div>
  </div>
    )
  }
}
export default Pic
/* useEffect(() => {
      Aos.init({duration:2000});
      
     }, []);
    */ 