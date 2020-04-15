import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import Dinner3 from '../MenuItemDetails/dinner3.png';
import Dinner4 from '../MenuItemDetails/dinner4.png';
import Dinner5 from '../MenuItemDetails/dinner5.png';
import Header from '../Header/Header';
import './MenuItemDetails.css';
import { useParams } from 'react-router-dom';
import foodData from '../../foodData';
import { cartContext } from '../../App';

const MenuItemDetails = () => {

    const [cart,setCart] =  useContext(cartContext);
    console.log("Cart  data" ,cart)
    const {foodsId} = useParams();
    // const foodData2 = foodData.handleAddFoodItem;
    // const foodDetails = foodData2.find(food => food.id == foodsId);
    const foodDetails = foodData.find(food => food.id == foodsId);
    
    const cartHandler = () => {
        const newCart = [...cart, foodDetails]
        setCart(newCart)
    }
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-6">
                        <div className="title-btn-details">
                            <h1>{foodDetails.foodName}</h1>
                            <p>{foodDetails.allDetails}</p>
                            <div className="item-count">
                                <span className="menuitem-price">${foodDetails.price}</span>
                                <span className="plus-minus-raper-btn">
                                    <button>-</button>
                                    <span>1</span>
                                    <button className="plus-btn">+</button>
                                </span>
                            </div>
                            <div className="item-add-btn-wr">
                                <button 
                                    onClick={cartHandler}
                                className="item-add-btn"><FontAwesomeIcon className="mr-3" icon={faCartArrowDown}></FontAwesomeIcon>Add</button>
                            </div>
                        </div>
                        <div className="image-slide">
                            <img className="float-left w-25" src={foodDetails.picture} alt="dinner3" />
                            <img className="float-left w-25 ml-5" src={foodDetails.picture} alt="dinner4" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className="w-100 ml-5" src={foodDetails.picture} alt="dinner5" />
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default MenuItemDetails;