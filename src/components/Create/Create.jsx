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
                            <label htmlFor='inputName' className='col-sm-3 col-form-label'>
                                Name pancake
                            </label>
                            <div className='col-sm-8'>
                                <input type='text' className='form-control' id='inputName' placeholder='Name' />
                            </div>
                        </div>
                        <div className='form-group row mt-3'>
                            <label className='col-sm-3' htmlFor='inlineFormCustomSelect'>
                                Type of pancake
                            </label>
                            <div className='col-sm-8'>
                                <select className='custom-select mr-sm-2 form-control' id='inlineFormCustomSelect'>
                                    <option defaultValue value='1' id='salt'>
                                        Salty
                                    </option>
                                    <option value='2' id='swee'>
                                        Sweet
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div className='form-group row mt-3 sweet' id='first'>
                            <div className='col-sm-3'>Ingredients</div>
                            <div className='col-sm-8'>
                                <div className='form-check'>
                                    <input className='form-check-input' type='checkbox' id='gridCheck1' />
                                    <label className='form-check-label' htmlFor='gridCheck1'>
                                        Cream
                                    </label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type='checkbox' id='gridCheck1' />
                                    <label className='form-check-label' htmlFor='gridCheck1'>
                                        Jam
                                    </label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type='checkbox' id='gridCheck1' />
                                    <label className='form-check-label' htmlFor='gridCheck1'>
                                        Peanut butter
                                    </label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type='checkbox' id='gridCheck1' />
                                    <label className='form-check-label' htmlFor='gridCheck1'>
                                        Plazma
                                    </label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type='checkbox' id='gridCheck1' />
                                    <label className='form-check-label' htmlFor='gridCheck1'>
                                        Sour Cherry
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='form-group row mt-3 salt' id='second'>
                            <div className='col-sm-3'>Ingredients</div>
                            <div className='col-sm-8'>
                                <div className='form-check'>
                                    <input className='form-check-input' type='checkbox' id='gridCheck1' />
                                    <label className='form-check-label' htmlFor='gridCheck1'>
                                        Sausage
                                    </label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type='checkbox' id='gridCheck1' />
                                    <label className='form-check-label' htmlFor='gridCheck1'>
                                        Sour cream
                                    </label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type='checkbox' id='gridCheck1' />
                                    <label className='form-check-label' htmlFor='gridCheck1'>
                                        Ketchap
                                    </label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type='checkbox' id='gridCheck1' />
                                    <label className='form-check-label' htmlFor='gridCheck1'>
                                        Prosciutto
                                    </label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type='checkbox' id='gridCheck1' />
                                    <label className='form-check-label' htmlFor='gridCheck1'>
                                        Salami
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='form-group row mt-4'>
                            <div className='col-sm-10'>
                                <button type='submit' className='btn btn-dark'>
                                    Create
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* <script src='./Create.js' type='text/javascript'></script> */}
        </main>
    );
};
export default Create;
