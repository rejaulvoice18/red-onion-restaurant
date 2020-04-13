import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faBusAlt,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './FoodHistory.css';
import adult from '../FoodHistory/adult-blur-blurred-background-687824.png';
import architecture from '../FoodHistory/architecture-building-city-2047397.png';
import chef from '../FoodHistory/chef-cook-food-33614.png';

const FoodHistory = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="half-of-row">
                        <h1>Why you choose us</h1>
                        <p>Barton waited twenty always repair in within we do. An delighted offering curiosity my is dashwoods at.
                            Boy prosperous increasing surrounded.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">

                    <div className="col-md-4">
                        <img className="w-100" src={adult} alt="" />
                        <div className="food-history-all-details">
                            <div className="food-history-single-icon float-left mt-1">
                                <FontAwesomeIcon className="left-icon" icon={faBusAlt}></FontAwesomeIcon>
                            </div>
                            <div className="food-history-details">
                                <h5>Fast Delivery</h5>
                                <p>Keep your systems in sync with automated web hook based notifications each time link 
                                is paid and how we dream about our future.
                                </p>
                                <a href="#">See more </a><FontAwesomeIcon className="see-more-icon" icon={faArrowRight}></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <img className="w-100" src={chef} alt="" />
                        <div className="food-history-all-details">
                            <div className="food-history-single-icon float-left mt-1">
                                <FontAwesomeIcon className="left-icon" icon={faBusAlt}></FontAwesomeIcon>
                            </div>
                            <div className="food-history-details">
                                <h5>A Good Auto Responder</h5>
                                <p>Keep your systems in sync with automated web hook based notifications each time link
                                is paid and how we dream about our future.
                                </p>
                                <a href="#">See more </a><FontAwesomeIcon className="see-more-icon" icon={faArrowRight}></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <img className="w-100" src={architecture} alt="" />
                        <div className="food-history-all-details">
                            <div className="food-history-single-icon float-left mt-1">
                                <FontAwesomeIcon className="left-icon" icon={faBusAlt}></FontAwesomeIcon>
                            </div>
                            <div className="food-history-details">
                                <h5>Home Delivery</h5>
                                <p>Keep your systems in sync with automated web hook based notifications each time link
                                is paid and how we dream about our future.
                                </p>
                                <a href="#">See more </a><FontAwesomeIcon className="see-more-icon" icon={faArrowRight}></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodHistory;