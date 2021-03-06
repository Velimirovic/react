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
            <main>
                <div className='container-fluid main-content'>
                    <div className='row'>
                        <div className='col-md-2 col-lg-2'></div>
                        <div class='col-md-8 px-4 mt-5 small-padding'>
                            <div className='row mt-4 rows'>
                                <div className='col-lg-4 col-sm-12 col-md-4 col-12  small-padding-cards'>
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
                                                Cream Plazma Banana
                                            </p>
                                            <h5 className='display-6' id='Price'>
                                                500rsd
                                            </h5>
                                            <p id='CreatedBy' className='mt-4'>
                                                <i> Created by MakePancake </i>{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-sm-12 col-md-4 col-12  small-padding-cards'>
                                    <div className='card' id='MainCard'>
                                        <div className='card-body' id='custom-font'>
                                            <h3 className='card-title' id='PancakeName'>
                                                Choco Pancake
                                            </h3>
                                            <h5 className='card-text' id='PancakeKind'>
                                                Sweet
                                            </h5>
                                            <br />
                                            <h6 id='Ingredients'> Ingredients: </h6>
                                            <p className='card-text' id='IngredientList'>
                                                Chocolate
                                            </p>
                                            <h5 className='display-6' id='Price'>
                                                100rsd
                                            </h5>
                                            <p id='CreatedBy' className='mt-4'>
                                                <i> Created by MakePancake </i>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-sm-12 col-md-4 col-12  small-padding-cards '>
                                    <div className='card' id='MainCard'>
                                        <div className='card-body' id='custom-font'>
                                            <h3 className='card-title' id='PancakeName'>
                                                Chilly Pancake
                                            </h3>
                                            <h5 className='card-text' id='PancakeKind'>
                                                Salty
                                            </h5>
                                            <br />
                                            <h6 id='Ingredients'> Ingredients: </h6>
                                            <p className='card-text' id='IngredientList'>
                                                Ketchap Salami Sausage
                                            </p>
                                            <h5 className='display-6' id='Price'>
                                                1000rsd
                                            </h5>
                                            <p id='CreatedBy' className='mt-4'>
                                                <i> Created by MakePancake </i>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            

                        </div>
                        <div className='col-md-2 col-lg-2'></div>
                    </div>
                </div>
            </main>
        </div>
    );
};
export default Home;
