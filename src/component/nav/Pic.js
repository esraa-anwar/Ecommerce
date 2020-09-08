import React, { Component } from 'react'
import Img from './Img'
const API_KEY = "18096186-ce8ecf86bb7a84384bfffa5c0"


class Pic extends Component {
    state={

images:[]

    }
 handleGetRequest=async(e)=>{

     const searchTerm=e.target.elements.searchValue.value
     const url ='https://pixabay.com/api/?key=18096186-ce8ecf86bb7a84384bfffa5c0&q=&image_type=photo '

     e.preventDefault()
   const request = await fetch(url);
   const response =await request.json()
   this.setState({images:response.hits})
   console.log(searchTerm)
   console.log(this.state.images)

 }
    render() {
        return (
            <div className="">
   <Img handleGetRequest={this.handleGetRequest}/>
            </div>
        )
    }
}

export default Pic
