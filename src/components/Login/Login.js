import React from 'react';
import Ract from './Login.css'
import SignUpLogo from '../SignUp/logo2.png';
import SignUpBg from '../SignUp/SignUpandLogin.jpg';

const Login = () => {
    return (
        <div className="sign-up">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 m-auto ">
                        <div className="sign-up-area-logo">
                            <img className="w-50 py-5" src={SignUpLogo} alt="signUp-logo" />
                        </div>
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                            </div>
                            
                            <button type="submit" className="btn btn-danger">Log In</button>
                        </form>
                        <p className="already-btn my-3"><a href="/signup">Don't have an account: <span className="signup-btn">Sign Up Now</span></a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;