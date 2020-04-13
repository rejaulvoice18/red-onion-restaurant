import React, { useState } from 'react';
import './Dinner.css';
import Header from '../Header/Header';
import DinnerSingle from '../DinnerSingle/DinnerSingle';
import foodData from '../../foodData';
import FoodHistory from '../FoodHistory/FoodHistory';
import Footer from '../Footer/Footer';

const Dinner = () => {
    const last6 = foodData.slice(12,18);
    const [dinner, setDinner] = useState(last6);
    return (
        
        <div className="">
            <Header></Header>
            <div className="container">
                <div className="row">
                    {
                        dinner.map(singDinner => <DinnerSingle dinner={singDinner}>
                        </DinnerSingle>)}
                </div>
                <button className="bangla-btn">Checkout Your Food</button>
            </div>
            <FoodHistory></FoodHistory>
            <Footer></Footer>
        </div>
    );
};

export default Dinner;