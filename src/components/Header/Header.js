import React from 'react';
import './Header.css';
import banner from '../StaticImage/bannerBackground.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
    
    return (
        <div className="header-all">
            <div className="img-bg">
                <div className="container-fluid bg">
                    <div className="row">
                        <div className="bg-title-btn m-auto">
                             {/* <img className="w-100" src={banner} alt="header-background" /> */}
                            <h1>Best food waiting for your belly</h1>
                            <input type="text" placeholder="Search food items"/><button>Search</button>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="container">
                <div className="row">
                    <div className="food-menu m-auto">
                        <nav>
                            <ul className="nav justify-content-center">
                                <li className="nav-item">
                                    <NavLink to="/breakfast" activeClassName="active">
                                        <a className="nav-link" href="">Breakfast</a>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/lunch" activeClassName="active">
                                        <a className="nav-link" href="">Lunch</a>
                                    </NavLink>
                                    
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/dinner" activeClassName="active">
                                        <a className="nav-link" href="">Diner</a>
                                    </NavLink>
                                </li>
                            </ul>
                            
                            {/* {
                                ul = document.querySelector('ul')
                                li = document.querySelectorAll('li');
                               

                                li.forEach(el => {
                                    el.addEventListener('click', function(){
                                        ul.querySelector('.active').classList.remove('.active');

                                        el.classList.add('.active');
                                    })
                                })
                             } */}
                        </nav>
                       
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Header;