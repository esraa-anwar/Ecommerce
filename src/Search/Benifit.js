import React, { Component } from 'react'
import "./Hygen.css"
export class Benifit extends Component {
    render() {
        return (
       
                 <div className="benefit-items">
                <div class="row">
                    <div className="col-lg-4">
                        <div class="single-benefit">
                            <div class="sb-icon">
                                <img className="no" src="img/icon-1.png" alt=""/>
                            </div>
                            <div class="sb-text">
                                <h6>Free Shipping</h6>
                                <p>For all order over 99$</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="single-benefit">
                            <div class="sb-icon">
                                <img className="no" src="img/icon-2.png" alt=""/>
                            </div>
                            <div class="sb-text">
                                <h6>Delivery On Time</h6>
                                <p>If good have prolems</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="single-benefit">
                            <div class="sb-icon">
                                <img className="no" src="img/icon-1.png" alt=""/>
                            </div>
                            <div class="sb-text">
                                <h6>Secure Payment</h6>
                                <p>100% secure payment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
          
        )
    }
}

export default Benifit
