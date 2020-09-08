import React, { Component } from "react";

import"./Hygen.css"


import Data from "./Data.json";

class App extends Component {
  state = {
    search: ""
  };

  renderData = Data => {
    const { search } = this.state;
    var name = Data.name.toLowerCase();

    /*if( search !== "" && country.name.toLowerCase().indexOf( search.toLowerCase() ) === -1 ){
        return null
    }*/

    return (
       
        <section class="text-center mb-4">
        <div class="row wow fadeIn">
        <div class="col-lg-3 col-md-3 mb-3">
               <div className="card">
    
             
                 <div class="view overlay">
                   <img src={Data.image} class="card-img-top" alt=""></img>
                   <a>
                     <div class="mask rgba-white-slight"></div>
                   </a>
                 </div>
            
    
     
                 <div class="card-body text-center">
    
                    
                
                   <h5>
                     <strong>
                       {Data.name}
                         <span class="badge badge-pill danger-color">NEW</span>
                       
                     </strong>
                   </h5>
    
                   <h4 class="font-weight-bold blue-text">
      <strong>{Data.price}</strong>
                   </h4>
                  

                 </div>
            
    
               </div>
          
               </div>
         </div>
               </section>
    );
  };

  onchange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;
    const filteredProduct = Data.filter(Data => {
      return Data.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
      <div className="flyout">
        <main style={{ marginTop: "4rem" }}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <center>
                  <h3>
                    <a
                      href="https://www.youtube.com/watch?v=RM_nXOyHwN0"
                      target="_blank"
                    >
                     Hello
                    </a>
                  </h3>
                </center>
              </div>
              <div className="col">
                <input
                type="text"
                className="input"
              placeholder="search"
                  label="Search prodect"
                  icon="search"
                  onChange={this.onchange}
                />
              </div>
              <div className="col" />
            </div>
            <div className="row">
              {filteredProduct.map(Data => {
                return this.renderData(Data);
              })}
            </div>
          </div>
        </main>
        
      </div>
    );
  }
}

export default App;