import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Navbar from './component/nav/Navbar'
import All from './All'
import Categories from './Categories'
import Fashion from './Fashion'
import Tv from './Tv'
import Mobile from './Mobile'
import Toys  from './Toys'
import Supermarket  from './Supermarket'
import Home  from './Home'
import Sports  from './Sports'
 class App extends Component {
  render() {
    return (
      
      <Router>
      <div className="App">
      <Navbar/>
      <Categories/>
      <Route path="/All" component={All}/>
      <Route path="/Fashion" component={Fashion}/>
      <Route path="/Supermarket" component={Supermarket}/>
      <Route path="/Fashion" component={Fashion}/>
      <Route path="/Mobile" component={Mobile}/>
      <Route path="/Tv" component={Tv}/>
      <Route path="/Home" component={Home}/>
      <Route path="/Toys" component={Toys}/>
      <Route path="/Sports" component={Sports}/>
      </div>
      </Router>
      
    )
  }
}

export default App
