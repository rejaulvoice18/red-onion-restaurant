import React, { useState } from 'react';
import Header from '../Header/Header';
import foodData from '../../foodData';
import BreakfastSingle from '../BreakfastSingle/BreakfastSingle';
import FoodHistory from '../FoodHistory/FoodHistory';
import Footer from '../Footer/Footer';

const Breakfast = () => {
    const middle6 = foodData.slice(6,12);
    const [breakF, setBreakF] = useState(middle6);
    
    return (
        <div className="">
            <Header></Header>
            <div className="container">
                <div className="row">
                    {
                        breakF.map(breakFS => <BreakfastSingle breakF = { breakFS} ></BreakfastSingle>)
                    }
                </div>
                <a href="/place"><button className="bangla-btn btn-danger">Checkout Your Food</button></a>
            </div>
            <FoodHistory></FoodHistory>
            <Footer></Footer>
        </div>
    );
};

export default Breakfast;