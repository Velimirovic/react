import React from "react";
import "./Home.css";
import "./css/bootstrap.css";
import panc from "../images/slika3.jpg";

const Home = () => {
    return (
        <div>
            <div className='container-fluid big-picture'>
                <img src={panc} className='d-block w-100' alt='Pancake' />
            </div>
            <div>
                <div className='container-fluid main-content'>
                    <div className='row'>
                        <div className='col-md-0 col-lg-2'></div>
                        <div className='row mt-4 rows'>
                            <div className='col-lg-4 col-sm-12 col-md-4 col-4 px-5 small-padding-cards'>
                                <div className='card' id='MainCard'>
                                    <div className='card-body' id='custom-font'>
                                        <h3 className='card-title' id='PancakeName'>
                                            Classic Pancake
                                        </h3>
                                        <h5 className='card-text' id='PancakeKind'>
                                            Sweet
                                        </h5>
                                        <br />
                                        <h6 id='Ingredients'> Ingredients: </h6>
                                        <p className='card-text' id='IngredientList'>
                                            Cookie, Orea, Banana, Strawberry, Chocolate, Something
                                        </p>
                                        <h5 className='display-6' id='Price'>
                                            500rsd
                                        </h5>
                                        <p id='CreatedBy' className='mt-4'>
                                            <i> Created by User </i>{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-sm-12 col-md-4 col-4 px-5 small-padding-cards'>
                                <div className='card' id='MainCard'>
                                    <div className='card-body' id='custom-font'>
                                        <h3 className='card-title' id='PancakeName'>
                                            Classic Pancake
                                        </h3>
                                        <h5 className='card-text' id='PancakeKind'>
                                            Sweet
                                        </h5>
                                        <br />
                                        <h6 id='Ingredients'> Ingredients: </h6>
                                        <p className='card-text' id='IngredientList'>
                                            Cookie, Orea, Banana, Strawberry, Chocolate, Something
                                        </p>
                                        <h5 className='display-6' id='Price'>
                                            500rsd
                                        </h5>
                                        <p id='CreatedBy' className='mt-4'>
                                            <i> Created by User </i>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-sm-12 col-md-4 col-4 px-5 small-padding-cards '>
                                <div className='card' id='MainCard'>
                                    <div className='card-body' id='custom-font'>
                                        <h3 className='card-title' id='PancakeName'>
                                            Classic Pancake
                                        </h3>
                                        <h5 className='card-text' id='PancakeKind'>
                                            Sweet
                                        </h5>
                                        <br />
                                        <h6 id='Ingredients'> Ingredients: </h6>
                                        <p className='card-text' id='IngredientList'>
                                            Cookie, Orea, Banana, Strawberry, Chocolate, Something
                                        </p>
                                        <h5 className='display-6' id='Price'>
                                            500rsd
                                        </h5>
                                        <p id='CreatedBy' className='mt-4'>
                                            <i> Created by User </i>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;
