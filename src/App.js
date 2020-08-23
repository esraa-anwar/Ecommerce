import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Navba from './component/nav/Navba'
import All from './component/Links/All'
import Categories from './component/Links/Categories'
import"bootstrap/dist/css/bootstrap.min.css"
import Fashion from './fashion/Fashion'
import Tv from './component/Links/Tv'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Toys  from './component/Links/Toys'
import Super  from './component/Links/Super'
import Home  from './component/Links/Home'
import Sports  from './component/Links/Sports'
import Women from './fashion/Women'
import Men from './fashion/Men'
import Bags from './fashion/Bags'
import Mobile from './mobile/Mobile'
import Iphone from './mobile/Iphone'
import Oppo from './mobile/Oppo'
import Sumsung from './mobile/Sumsung'
import Pic from './component/nav/Pic'
import"./customs.scss"
 class App extends Component {
  render() {
    return (
      
      <Router>
      <div className="App">
      <Navba/>
    <Categories/>
      <Pic/>
      <Route path="/fashion/Bags" component={Bags}/>
      <Route path="/fashion/Men" component={Men}/>
      <Route path="/mobile/Oppo" component={Oppo}/>
      <Route path="/fashion/Women" component={Women}/>
      <Route path="/component/links/All" component={All}/>
      <Route path="/fashion/Fashion" component={Fashion}/>
      <Route path="/component/links/Super" component={Super}/>
      <Route path="/mobile/Iphone" component={Iphone}/>
      <Route path="/mobile/Sumsung" component={Sumsung}/>
      <Route path="/mobile/Mobile" component={Mobile}/>
      <Route path="/component/links/Tv" component={Tv}/>
      <Route path="/component/links/Home" component={Home}/>
      <Route path="/component/links/Toys" component={Toys}/>
      <Route path="/component/links/Sports" component={Sports}/>
      </div>
      </Router>
      
    )
  }
}

export default App
