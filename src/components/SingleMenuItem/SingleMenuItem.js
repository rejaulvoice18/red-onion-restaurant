import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import './SingleMenuItem.css';


const SingleMenuItem = (props) => {
    const { foodName, picture, allDetails, price } = props.foodDetails
    console.log(props.foodDetails);
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="title-btn-details">
                            <h1>{foodName}</h1>
                            <p>{allDetails}</p>
                            <div className="item-count">
                                <span className="menuitem-price">${price}</span>
                                <span className="plus-minus-raper-btn">
                                    <button>-</button>
                                    <span>1</span>
                                    <button className="plus-btn">+</button>
                                </span>
                            </div>
                            <div className="item-add-btn-wr">
                                <button className="item-add-btn"><FontAwesomeIcon className="mr-3" icon={faCartArrowDown}></FontAwesomeIcon>Add</button>
                            </div>
                        </div>
                        <div className="image-slide">
                            <img className="float-left w-25" src={picture} alt="dinner3" />
                            <img className="float-left w-25 ml-5" src={picture} alt="dinner4" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className="w-100 ml-5" src={picture} alt="dinner5" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleMenuItem;