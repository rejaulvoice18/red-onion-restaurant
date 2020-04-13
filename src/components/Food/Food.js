import React, { useState } from 'react';
import LunchSingle from '../LunchSingle/LunchSingle';
import foodData from '../../foodData';
import Header from '../Header/Header';
import './Food.css';
import Breakfast from '../Breakfast/Breakfast';
import FoodHistory from '../FoodHistory/FoodHistory';
import Footer from '../Footer/Footer';

const Food = () => {
    const first6 = foodData.slice(0,6);
    console.log(first6);
    const [food, setFood] = useState(first6);
    // const breakfast = food.filter(cat => cat.category === foodData.breakfast);

    const handleAddFoodItem = () =>{
        console.log("food Added");
    }
    return (
        <div className="">
        <Header></Header>
            <div className="container">
                <div className="row">
                    {
                        food.map(singleFood => 
                        
                        <LunchSingle 
                        
                        handleAddFoodItem={handleAddFoodItem}
                        food={singleFood}>

                        </LunchSingle>
                        
                        )}
                        {/* {
                            breakfast.map(bre => <Breakfast breakfast={bre}></Breakfast>)
                        } */}
                    
                </div>
                <button className="bangla-btn">Checkout Your Food</button>
            </div>
            <FoodHistory></FoodHistory>
            <Footer></Footer>
        </div>
    );
};

export default Food;