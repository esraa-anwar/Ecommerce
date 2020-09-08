import React from "react";
import "./Style.css"

class App extends React.Component {
 
    constructor(props) {
      super(props);
      this.state = {  

searchData:null

      }
    }
    search(key){
//console.warn(key);
fetch("http://localhost:3000/manifest.json"+key).then((data)=>{
data.json().then((resp)=>{

  console.warn("resp",resp)
})


})
    }
 
  render() {
    return (
      <div class="jumbotron">
   
    <form class="form-inline" method = "GET" action = "{% url 'search' %}" >
        <div class="formExample">
        <input class="form-control mr-sm-2" name="query"  type="text" placeholder="Search By Name"/>
        <button class="btn btn-outline-success  my-2 my-sm-0" type="submit" onChange={(event)=>this.search(event.target.value)}>search</button></div>
    </form>
  <p class="lead">Enojy shopping in our stories
      (IOS and Android app coming soon!)</p>
  <hr class="my-4"/>
  <p class="lead">
    <a  class="btn btn-primary btn-md learn_more_buttons" href="{% url 'business_owners_info' %}" role="button">Business Owner's Learn More</a>
    <a class="btn btn-primary btn-md learn_more_buttons" href="{% url 'job_seekers_info' %}" role="button">Job Seekers Learn More</a>
  </p>
</div>);
  }
}

export default App;