import React, { useState } from "react";
import "./Create.css";
import "./Salty";
import Salty from "./Salty";
import Sweet from "./Sweet";

const Create = () => {


    const[itemValue,setItemValue] = useState(1); 

    const getValue = (item) =>{
        
        let a = item.target.value;
        setItemValue(a)
        

    }


    


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
                                <select className='custom-select mr-sm-2 form-control' id='inlineFormCustomSelect' onChange={getValue}>
                                    <option value='1' id='salt'>
                                        Salty
                                    </option>
                                    <option defaultValue value='2' id='swee'>
                                        Sweet
                                    </option>
                                </select>
                            </div>
                        </div>
                        {
                            
                            itemValue == 2 ? <Sweet /> : <Salty />

                        
                        }
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
        </main>
    );
};
export default Create;
