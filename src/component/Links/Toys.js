import React , { Component }  from 'react'


import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

 const data=[
  {
    name:"men", 
    kind:[
      {
    statue:'sale',
  price:'150',
  name:'shose',
  image:'/img/man-2.jpg'
},
{

statue:'',
price:'500',
name:'shirt',
image:"/img/man-4.jpg"
},
{
  
  statue:'',
  price:'650',
  name:'shirt',
  image:"/img/product-8.jpg"}

]
  }
]
;
 

class Toys extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    console.log(data);
    this.setState({ data });
  }
   
    render() {
      const { data } = this.state;
      const resume = data.map(dataIn => {
        return (
          <div  key={dataIn.name}>
            {dataIn.name}
            {dataIn.kind.map(kind => (
              
           
            <div className="col-lg-3 col-md-3 mb-3">
                   <div className="card">
        
                 
                     <div class="view overlay">
                       <img src={kind.image} class="card-img-top" alt=""></img>
                       <a>
                         <div class="mask rgba-white-slight"></div>
                       </a>
                     </div>
                
        
         
                     <div class="card-body text-center">
        
                       <Link to=""><FaShoppingCart className="icon"/></Link>
                        
                    
                       <h5>
                         <strong>
                           <Link to="">{kind.name}
                             <span class="badge badge-pill danger-color">NEW</span>
                             </Link>
                         </strong>
                       </h5>
        
                       <h4 class="font-weight-bold blue-text">
          <strong>{kind.price}</strong>
                       </h4>
        
                     </div>
                
        
                   </div>
              
                   </div>
                  

            
            ))}
          </div>
        )
      })
      return <div className="container">  <section class="text-center mb-4">
      <div class="row wow fadeIn"> {<React.Fragment>{resume}</React.Fragment>}</div> 
                   </section></div>}}
      
       

export default Toys
