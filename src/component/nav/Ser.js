import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {IconButton} from'@material-ui/core' 
import {Search} from'@material-ui/core' 
class Ser extends Component {
    render() {
        return (
<NavLink to="/">
    <input></input>
            <div className="Search" className="middle">

<Search></Search>
            </div>
            </NavLink>
        )
    }
}

export default Search
