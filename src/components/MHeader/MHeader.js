import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,  faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import './MHeader.css';
import Logo from '../MHeader/logo2.png';
import { cartContext } from '../../App';

// const cartValue = useContext(cartContext);

const MHeader = () => {
    return (
        <div>
            <div className="">
                <div className="row">
                    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="/lunch"><img className="w-25 float-left" src={Logo} alt="logo"/></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><FontAwesomeIcon icon={faCartArrowDown}></FontAwesomeIcon><span className="ml-1">2</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/login">Login</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/signup"><button>Sign up</button></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default MHeader;