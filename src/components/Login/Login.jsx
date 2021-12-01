import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./Login.css";
import validator from 'validator';

const Login = () => {


        const [emailError, setEmailError] = useState('');
        const validateEmail = (e) => {

            var email = e.traget.value;

            if(validator.isEmail(email)){
                setEmailError('Valid Email')
            } else {
                setEmailError('Enter valid!!')
            }
        }


    return (
        <div>
            <main>
                <div className='container-fluid first'>
                    <div className='d-flex justify-content-center'>
                        <div className='titles'>
                            <h2 className='text-color text-center text-uppercase mt-4 animate__animated animate__fadeInDown' style={{ animationDuration: "2s" }}>
                                Login
                            </h2>
                        </div>
                    </div>
                    <div className='order-div animate__animated animate__fadeInLeft' style={{ animationDuration: "2s" }}>
                        
                        
                        <form id='forma_login'>
                            <div className='form-group row mt-3'>
                                <label for='inputEmail3' className='col-sm-4 col-md-4 col-lg-2 col-form-label sd'>
                                    Email
                                </label>
                                <div className='col-sm-10'>
                                    <input  className='form-control' type="text" id='userEmail' placeholder='Email' 
                                    onChange={(e) => validateEmail(e)}>
                                    </input>
                                    <span 
                                        style={{
                                            fontWeight:'bold',
                                            color: 'red',
                                        }}
                                    >{emailError}</span>
                                </div>
                            </div>
                            <div className='form-group row mt-3'>
                                <label for='inputPassword3' className='col-sm-4 col-md-4 col-lg-2 col-form-label'>
                                    Password
                                </label>
                                <div className='col-sm-10'>
                                    <input className='form-control' placeholder='Password' type="password" id='inputPassword'/>
                                    <small id="small-za-gresku-password"></small>
                                </div>
                            </div>
                            <div className='form-group row mt-4'>
                                <div className='col-sm-10 as'>
                                    <button type='submit' className='btn btn-dark ad' id='submit'>
                                        Sign in
                                    </button>
                                </div>
                            </div>
                            <div className='register-link text-center mt-3'>
                                <Link to='/Register'> Create account </Link>
                            </div>
                        </form>




                    </div>
                </div>
            </main>
            <script src="Validation.js"></script>
        </div>
    );
};
export default Login;
