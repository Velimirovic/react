import React from "react";
import Select from "../components2/Select";
import "./css/bootstrap.css";
import "./Order.css";

const Order = () => {
    return (
        <main>
            <div className='container-fluid first'>
                <div className='d-flex justify-content-center'>
                    <div className='titles'>
                        <h2 className='text-color text-center text-uppercase mt-4 animate__animated animate__slideInDown'>Order</h2>
                    </div>
                </div>
                <div className='container-fluid order-div animate__animated animate__slideInLeft' style={{ animationDuration: "2s" }}>
                    {/* <div className='row'>  */}
                    <form action='post' target='#'>
                        <div className='col-12 px-5 py-2 text-center'>
                            <label>Address</label>
                        </div>
                        <div className='col-12 px-5 py-2'>
                            <input type='text' className='form-control' placeholder='Adresa' />
                        </div>
                        <div className='col-12 px-5 py-2 text-center'>
                            <label>Contact</label>
                        </div>
                        <div className='col-12 px-5 py-2'>
                            <input type='text' className='form-control' placeholder='Kontakt' />
                        </div>
                        <div className='col-12 px-5 py-2 text-center'>
                            <label>Pancakes</label>
                        </div>
                        <div className='col-12 px-5 py-2'>
                            <select className='w-100 m-3 form-control '>
                                <option> Should've been list of pancakes</option>
                            </select>
                            <select className='w-100 m-3 form-control '>
                                <option> Should've been list of pancakes</option>
                            </select>
                            <select className='w-100 m-3 form-control '>
                                <option> Should've been list of pancakes</option>
                            </select>
                            <select className='w-100 m-3 form-control '>
                                <option> Should've been list of pancakes</option>
                            </select>
                        </div>
                    </form>
                    {/* </div> */}
                </div>
            </div>
        </main>
    );
};
export default Order;
