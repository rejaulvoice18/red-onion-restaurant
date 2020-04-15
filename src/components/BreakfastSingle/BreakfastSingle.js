import React from 'react';
import './BreakfastSingle.css';
import { Link } from 'react-router-dom';

const BreakfastSingle = (props) => {
    const { picture, foodName, shortDetails, price,id } = props.breakF;
    console.log(props.breakF);
    return (
        <div className="col-md-4 t-d-n">
            <Link to={"/" + id}>
            <div className="card" style={{ width: '18rem' }}>
                <img src={picture} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{foodName}</h5>
                    <p className="card-text">{shortDetails}</p>
                    <p>${price}</p>
                    {/* <a href={{}} className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
            </Link>
        </div>
    );
};

export default BreakfastSingle;