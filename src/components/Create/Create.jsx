import React from "react";
import "./Create.css";

const Create = () => {
    return (
        <main>
            <div className='container-fluid first'>
                <div className='d-flex justify-content-center'>
                    <div className='titles'>
                        <h2 className='text-color text-center text-uppercase mt-4 font animate__animated animate__slideInDown'>Create</h2>
                    </div>
                </div>
                <div className='order-div animate__animated animate__slideInLeft'>
                    <form>
                        <div className='form-group row mt-3'>
                            <label for='inputName' className='col-sm-3 col-form-label'>
                                Name pancake
                            </label>
                            <div className='col-sm-8'>
                                <input type='text' className='form-control' id='inputName' placeholder='Name' />
                            </div>
                        </div>
                        <div className='form-group row mt-3'>
                            <label className='col-sm-3' for='inlineFormCustomSelect'>
                                Type of pancake
                            </label>
                            <div className='col-sm-8'>
                                <select className='custom-select mr-sm-2 form-control' id='inlineFormCustomSelect'>
                                    <option selected>Choose your type</option>
                                    <option value='1'>Salty</option>
                                    <option value='2'>Sweet</option>
                                </select>
                            </div>
                        </div>

                        <div className='form-group row mt-3 sweet'>
                            <div className='col-sm-3'>Ingredients (+5$ per)</div>
                            <div className='col-sm-8'>
                                <div className='form-check'>
                                    <input className='form-check-input' type='checkbox' id='gridCheck1' />
                                    <label className='form-check-label' for='gridCheck1'>
                                        Cream
                                    </label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type='checkbox' id='gridCheck1' />
                                    <label className='form-check-label' for='gridCheck1'>
                                        Jam
                                    </label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type='checkbox' id='gridCheck1' />
                                    <label className='form-check-label' for='gridCheck1'>
                                        Peanut butter
                                    </label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type='checkbox' id='gridCheck1' />
                                    <label className='form-check-label' for='gridCheck1'>
                                        Plazma
                                    </label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type='checkbox' id='gridCheck1' />
                                    <label className='form-check-label' for='gridCheck1'>
                                        Sour Cherry
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='form-group row mt-3 salt'>
                            <div className='col-sm-3'>Ingredients (+2$ per)</div>
                            <div className='col-sm-8'>
                                <div className='form-check'>
                                    <input className='form-check-input' type='checkbox' id='gridCheck1' />
                                    <label className='form-check-label' for='gridCheck1'>
                                        Sausage
                                    </label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type='checkbox' id='gridCheck1' />
                                    <label className='form-check-label' for='gridCheck1'>
                                        Sour cream
                                    </label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type='checkbox' id='gridCheck1' />
                                    <label className='form-check-label' for='gridCheck1'>
                                        Ketchap
                                    </label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type='checkbox' id='gridCheck1' />
                                    <label className='form-check-label' for='gridCheck1'>
                                        Prosciutto
                                    </label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type='checkbox' id='gridCheck1' />
                                    <label className='form-check-label' for='gridCheck1'>
                                        Salami
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='form-group row mt-4'>
                            <div className='col-sm-10'>
                                <button type='submit' className='btn btn-dark'>
                                    Sign in
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};
export default Create;
