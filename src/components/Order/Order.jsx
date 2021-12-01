import React from "react";
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
                                <label>Adresa</label>
                            </div>
                            <div className='col-12 px-5 py-2'>
                                <input type='text' className='form-control' placeholder='Adresa' />
                            </div>
                            <div className='col-12 px-5 py-2 text-center'>
                                <label>Kontakt</label>
                            </div>
                            <div className='col-12 px-5 py-2'>
                                <input type='text' className='form-control' placeholder='Kontakt' />
                            </div>
                            <div className='col-12 px-5 py-2 text-center'>
                                <label>Broj palačinaka</label>
                            </div>
                            <div className='col-12 px-5 py-2'>
                                <select className='form-select' aria-label='Default select example'>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
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
