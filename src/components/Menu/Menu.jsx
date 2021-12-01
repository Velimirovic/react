import React from "react";
import "./Menu.css";
import slik from "../images/slika3.jpg";

const Menu = () => {
    return (
        <main>
            <div className='container-fluid big-picture'>
                <img src={slik} className='d-block w-100' alt='Pancake' />
            </div>

            <div className='container-fluid main-content'>
                <div className='d-flex justify-content-center'>
                    <div className='titles'>
                        <h2 className='text-color text-center text-uppercase mt-5 font animate__animated animate__fadeInDown' style={{ animationDuration: "2s" }}>
                            Menu
                        </h2>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-md-2'></div>

                    <div className='col-md-8 px-4 mt-5 small-padding'>
                        <div className='order-div animate__animated animate__fadeInLeft' style={{ animationDuration: "2s" }}>
                            <form>
                                <div className='form-group row mt-3'>
                                    <label for='inputName' className='col-sm-3 col-form-label'>
                                        Name pancake
                                    </label>
                                    <div className='col-sm-8'>
                                        <input type='text' className='form-control' id='inputName' placeholder='Name' />
                                    </div>
                                </div>

                                <div className='form-group row mt-3 sweet'>
                                    <div className='col-sm-3'>Type of pancake</div>
                                    <div className='col-sm-8'>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' id='gridCheck1' />
                                            <label className='form-check-label' for='gridCheck1'>
                                                Sweet
                                            </label>
                                        </div>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' id='gridCheck1' />
                                            <label className='form-check-label' for='gridCheck1'>
                                                Salty
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className='form-group row mt-4'>
                                    <div className='col-sm-10'>
                                        <button type='submit' className='btn btn-dark'>
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className='row mt-5'>
                            <div className='col-lg-4 col-sm-4 col-md-4 col-4 px-5 small-padding-cards animate__animated animate__fadeInLeft' style={{ animationDuration: "2s" }}>
                                <div className='card' id='MainCard'>
                                    <div className='card-body' id='custom-font'>
                                        <h3 className='card-title' id='PancakeName'>
                                            {" "}
                                            Classic Pancake{" "}
                                        </h3>
                                        <h5 className='card-text' id='PancakeKind'>
                                            {" "}
                                            Sweet
                                        </h5>
                                        <br />
                                        <h6 id='Ingredients'> Ingredients: </h6>
                                        <p className='card-text' id='IngredientList'>
                                            {" "}
                                            Cookie, Orea, Banana, Strawberry, Chocolate, Something
                                        </p>
                                        <h5 className='display-6' id='Price'>
                                            {" "}
                                            500rsd{" "}
                                        </h5>
                                        <p id='CreatedBy' className='mt-4'>
                                            {" "}
                                            <i> Created by User </i>{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default Menu;
