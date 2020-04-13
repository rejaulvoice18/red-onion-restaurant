import React from 'react';
import './Footer.css';
import footerLogo from '../Footer/logo.png';

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img className="w-25 float-left mt-5" src={footerLogo} alt="footerLogo" />
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="footer-first-list mt-5 ml-5 pl-5">
                                    <ul>
                                        <li>About Online food</li>
                                        <li>Read our blog</li>
                                        <li>Sign up to deliver</li>
                                        <li>Add your restaurant</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="footer-second-list mt-5 ml-5 pl-5">
                                    <ul>
                                        <li>Get help</li>
                                        <li>Read FAQs</li>
                                        <li>View all cities</li>
                                        <li>Restaurants near me</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-8">
                        <p className="footer-copyright mt-5">copyright &#169; 2020 online food</p>
                    </div>
                    <div className="col-md-4">
                        <div className="third-list mt-5">
                            <ul>
                                <li>Privacy</li>
                                <li>Terms of Use</li>
                                <li>Pricing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Footer;