import React from 'react';
import './LunchSingle.css';

const LunchSingle = (props) => {
    const {foodName, picture, price, shortDetails} = props.food;
    return (
        <div className="col-md-4">
            <div className="card" style={{ width: '18rem' }}>
                <img src={picture} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{foodName}</h5>
                    <p className="card-text">{shortDetails}</p>
                    <p>${price}</p>
                    {/* <a href={{}} className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div>
    );
};

export default LunchSingle;