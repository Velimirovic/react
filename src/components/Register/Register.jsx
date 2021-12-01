import React, { useState } from "react";
import Login from "../Login/Login";
import { BrowserRouter, Router, Link } from "react-router-dom";
import "./Register.css";
import validator from 'validator';

const Register = () => {


    const [emailError, setEmailError] = useState('');
    const validateEmail = (e) => {

        var email = e.target.value;

        if(validator.isEmail(email)){
            setEmailError('')
        } else {
            setEmailError('Enter valid!!')
        }
    }

         const [passError, setPassError] = useState('');
        const validatePass = (e) => {

            var password = e.target.value;

            if(validator.isStrongPassword(password)){
                setPassError('')
            } else {
                setPassError('More then 8 char, Uppercase, Number, Symbol ')
            }
        }





    return (
        <div>
            <main>
                <div className='container-fluid first'>
                    <div className='d-flex justify-content-center'>
                        <div className='titles'>
                            <h2 className='text-color text-center text-uppercase mt-4 animate__animated animate__fadeInDown'>Register</h2>
                        </div>
                    </div>
                    <div className='order-div animate__animated animate__fadeInLeft'>
                        <form>
                            <div className='form-group row mt-3'>
                                <label for='inputEmail3' className='col-sm-4 col-md-4 col-lg-2 col-form-label'>
                                    Email
                                </label>
                                <div className='col-sm-10'>
                                    <input type='email' className='form-control' id='inputEmail3' placeholder='Email' onBlur={(e) => validateEmail(e)}/>
                                    <span 
                                        style={{
                                            fontWeight:'bold',
                                            color: 'red',
                                        }}
                                    >{emailError}</span>
                                </div>
                            </div>
                            <div className='form-group row mt-3'>
                                <label for='inputName' className='col-sm-4 col-md-4 col-lg-2 col-form-label'>
                                    Username
                                </label>
                                <div className='col-sm-10'>
                                    <input type='text' className='form-control' id='inputName' placeholder='Username' />
                                </div>
                            </div>
                            <div className='form-group row mt-3'>
                                <label for='inputPassword3' className='col-sm-4 col-md-4 col-lg-2 col-form-label'>
                                    Password
                                </label>
                                <div className='col-sm-10'>
                                    <input type='password' className='form-control' id='inputPassword3' placeholder='Password' onBlur={(e) => validatePass(e)}/>
                                    <span 
                                        style={{
                                            fontWeight:'bold',
                                            color: 'red',
                                        }}
                                    >{passError}</span>   
                                </div>
                            </div>
                            <div className='form-group row mt-3'>
                                <label for='inputPassword4' className='col-sm-4 col-md-4 col-lg-2 col-form-label'>
                                    Repeat password
                                </label>
                                <div className='col-sm-10'>
                                    <input type='password' className='form-control' id='inputPassword4' placeholder='Password' />
                                </div>
                            </div>
                            <div className='form-group row mt-4'>
                                <div className='col-sm-10'>
                                    <button type='submit' className='btn btn-dark'>
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                            <div className='login-link text-center mt-3'>
                                <Link to='/Login'> Already have account? </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};
export default Register;
