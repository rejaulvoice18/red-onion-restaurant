import React from 'react';
import { Link } from 'react-router-dom';

const DinnerSingle = (props) => {
    const {picture, foodName, price, shortDetails, id} = props.dinner;
    console.log(props.dinner0);
    return (
        <div className="col-md-4">
            <div className="card" style={{ width: '18rem' }}>
                <img src={picture} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"><Link to={"/"+id}>{foodName}</Link></h5>
                    <p className="card-text">{shortDetails}</p>
                    <p>${price}</p>
                    {/* <a href={{}} className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div>
    );
};

export default DinnerSingle;