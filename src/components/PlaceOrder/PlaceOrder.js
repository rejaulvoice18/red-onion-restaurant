import React from 'react';
import './PlaceOrder.css';
import SSinglePlaceOrder from '../SSinglePlaceOrder/SSinglePlaceOrder';

const PlaceOrder = () => {
    return (
        <div className="placeOrder-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="save-continue">
                            <div className="row">
                                <div className="">
                                    <h3>Edit Delivery Details</h3>
                                    <hr/>
                                    <form>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Deliver to door" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="107 Rd No 8" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Flat, suite or floor" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Business Name" />
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Add delivery instructor"></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-danger">Sign Up</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="cart-title">
                            <h5>From: Gulshan Plaza Restaura GPR</h5>
                            <h6>Arriving in 20-30 min</h6>
                            <h6>107 Rd No 8</h6>
                        </div>
                        <div className="cart-item">
                                    <SSinglePlaceOrder></SSinglePlaceOrder>
                        </div>
                        <div class="cart-item-calculation">
                            <div class="row">
                                <div class="col-md-8 pt-3 text-status">
                                    <h5>Subtotal: 4 item </h5>
                                    <h5>Tax:</h5>
                                    <h5>Delivery fee: </h5>
                                    <h5>Total:</h5>
                                </div>

                                <div class="col-md-4 status pt-3 mb-3">
                                    <h5>$<span id="subtotalInc">1278</span></h5>
                                    <h5>$2.00</h5>
                                    <h5>$0</h5>
                                    <h5>$<span id="totalPrice">1278</span></h5>
                                </div>
                                <button type="submit" className="btn btn-danger place-btn m-auto mt-3">Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;