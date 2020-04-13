import React from 'react';
import './SSinglePlaceOrder.css';
import cartImage from '../SSinglePlaceOrder/lunch1.png';

const SSinglePlaceOrder = () => {
    return (
        <div className="single-place-order-area">
            <div className="container">
                <div className="row single-all-area">
                    <div className="col-sm-4 a">
                        <img className="w-100 singBg" src={cartImage} alt="cartImage" />
                    </div>
                    <div className="col-sm-4 b">
                        <h5>Butter Naan</h5>
                        <h4>$40</h4>
                        <h6>Delivery free</h6>
                    </div>
                    <div className="col-sm-4 c">
                        <div className="btn3">
                            <button>-</button><span>02</span><button>+</button>
                        </div>
                    </div>
                </div>
                <div className="row single-all-area">
                    <div className="col-sm-4 a">
                        <img className="w-100 singBg" src={cartImage} alt="cartImage" />
                    </div>
                    <div className="col-sm-4 b">
                        <h5>Butter Naan</h5>
                        <h4>$40</h4>
                        <h6>Delivery free</h6>
                    </div>
                    <div className="col-sm-4 c">
                        <div className="btn3">
                            <button>-</button><span>02</span><button>+</button>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
};

export default SSinglePlaceOrder;