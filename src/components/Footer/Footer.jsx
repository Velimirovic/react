import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Home from "../Home/Home";
import Order from "../Order/Order";
import Create from "../Create/Create";
import Menu from "../Menu/Menu";
import Contact from "../Contact/Contact";
import { Route, Routes } from "react-router";
import slidza from "../images/One4All_Logo.png";
import insta from "../images/instagram.png";
import fejs from "../images/facebook.png";
import "./Footer.css";
import "./css/bootstrap.min.css";

const Footer = () => {
    return (
        <div className='container-fluid'>
            <div class='footer-top d-flex'>
                <div class='col-md-4 col-lg-4 pt-4 text-center footer-top-content leftajfloat'>
                    <ul className='list-group footer-list float-right'>
                        <BrowserRouter>
                            <li className='list-group'>
                                <Link className='nav-link active hoverclass' to='/Home'>
                                    Home
                                </Link>
                            </li>
                            <li className='list-group'>
                                <Link className='nav-link active hoverclass' to='/Order'>
                                    Order
                                </Link>
                            </li>
                            <li className='list-group'>
                                <Link className='nav-link active hoverclass' to='/Create'>
                                    Create
                                </Link>
                            </li>
                            <li className='list-group'>
                                <Link className='nav-link active hoverclass' to='/Menu'>
                                    Menu
                                </Link>
                            </li>
                            <li className='list-group'>
                                <Link className='nav-link active hoverclass' to='/Contact'>
                                    Contact
                                </Link>
                            </li>
                            <Routes>
                                <Route path='/Home' element={<Home />} />
                                <Route path='/Order' element={<Order />} />
                                <Route path='/Create' element={<Create />} />
                                <Route path='/Menu' element={<Menu />} />
                                <Route path='/Contact' element={<Contact />} />
                            </Routes>
                        </BrowserRouter>
                    </ul>
                    {/* <div class='col-md-12 col-lg-4 pt-4 col-sm-11 text-center footer-top-content icons'>
                            <BrowserRouter>
                                <Link to='instagram.com'>
                                    <img src={insta} alt='' />
                                </Link>
                                <Link to={fejs}>
                                    <img src='images/facebook.png' alt='' />
                                </Link>
                            </BrowserRouter>
                        </div> */}
                    <div class='col-md-12 col-lg-4 pt-4 text-center footer-top-content'>
                        <ul class='list-group float-left'>
                            <article class='logo_down'>
                                <img src={slidza} alt='' />
                            </article>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
