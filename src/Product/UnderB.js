import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import "./Mp.css"

export class UnderB extends Component {
    render() {
        return (
           <div className="flex-container">

<div className="Mp" className="row">

<div className="col-lg-4 col-sm-6">
<NavLink className="under" to="../fashion/Women">NEW  ARRIVE</NavLink>



</div>
<div className="col-lg-4 col-sm-6">

<NavLink to="" className="under"> FEATURE  PRODUCT</NavLink>


</div>
<div className="col-lg-4 col-sm-6">
<NavLink to="Women" className="under">SELA  ITEM</NavLink>

</div>
</div>

</div>
        )
    }
}

export default UnderB
