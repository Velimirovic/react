import React from "react";
import { BrowserRouter } from "react-router-dom";

const Login = () => {
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
                        <form>
                            <div className='form-group row mt-3'>
                                <label for='inputEmail3' className='col-sm-4 col-md-4 col-lg-2 col-form-label sd'>
                                    Email
                                </label>
                                <div className='col-sm-10'>
                                    <input type='email' className='form-control' id='inputEmail3' placeholder='Email' />
                                </div>
                            </div>
                            <div className='form-group row mt-3'>
                                <label for='inputPassword3' className='col-sm-4 col-md-4 col-lg-2 col-form-label'>
                                    Password
                                </label>
                                <div className='col-sm-10'>
                                    <input type='password' className='form-control' id='inputPassword3' placeholder='Password' />
                                </div>
                            </div>
                            <div className='form-group row mt-4'>
                                <div className='col-sm-10'>
                                    <button type='submit' className='btn btn-dark'>
                                        Sign in
                                    </button>
                                </div>
                            </div>
                            <div className='register-link text-center mt-3'>
                                {/* <BrowserRouter>
                                    <Link to='/Register'> Create account </Link>
                                </BrowserRouter> */}
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};
export default Login;
