import React from 'react';
import dinner3 from '../MenuItemDetails/dinner3.png';
import dinner4 from '../MenuItemDetails/dinner4.png';
import dinner5 from '../MenuItemDetails/dinner5.png';
import Header from '../Header/Header';
import './MenuItemDetails.css';
import { useParams } from 'react-router-dom';
import foodData from '../../foodData';
import SingleMenuItem from '../SingleMenuItem/SingleMenuItem';

const MenuItemDetails = () => {
    const {foodsId} = useParams();
    const foodDetails = foodData.find(food => food.id === foodsId);
    
    console.log(foodDetails);
    return (
        <div>
            <Header></Header>
            <div>
            
            {
                    foodDetails.map(sFood => <SingleMenuItem foodDetails={sFood}></SingleMenuItem>
                    
            )}
            </div>
           
        </div>
    );
};

export default MenuItemDetails;