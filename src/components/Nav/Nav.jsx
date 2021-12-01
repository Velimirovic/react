import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Home from "../Home/Home";
import Order from "../Order/Order";
import Create from "../Create/Create";
import Menu from "../Menu/Menu";
import Contact from "../Contact/Contact";
import { Route, Routes } from "react-router";
import Logo from "../images/One4All_Logo.png";
import userpic from "../images/user.png";
import "./Nav.css";
import "./css/bootstrap.min.css";

const Nav = () => {
    return (
        <div className='container-fluid'>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top nav-padding h-auto'>
                <div className='container-fluid'>
                    <BrowserRouter>
                        <Link className='navbar-brand logo' to='/Home'>
                            <article className='logo_down'>
                                <img src={Logo} alt='' />
                            </article>
                        </Link>
                        <button
                            class='navbar-toggler'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#navbarSupportedContent'
                            aria-controls='navbarSupportedContent'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                        >
                            <span class='navbar-toggler-icon'></span>
                        </button>
                    </BrowserRouter>
                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <BrowserRouter>
                                <li className='nav-item'>
                                    <Link className='nav-link active' to='/Home'>
                                        Home
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link active' to='/Order'>
                                        Order
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link active' to='/Create'>
                                        Create
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link active' to='/Menu'>
                                        Menu
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link active' to='/Contact'>
                                        Conctact
                                    </Link>
                                </li>
                            </BrowserRouter>
                        </ul>
                    </div>
                    <form className='d-flex'>
                        <form className='d-flex'>
                            <BrowserRouter>
                                <Link className='nav-link active ' to='/Home'>
                                    <img src={userpic} alt='' />
                                </Link>
                            </BrowserRouter>
                        </form>
                    </form>
                </div>
                <BrowserRouter>
                    <Routes>
                        <Route path='/Home' element={<Home />} />
                        <Route path='/Order' element={<Order />} />
                        <Route path='/Create' element={<Create />} />
                        <Route path='/Menu' element={<Menu />} />
                        <Route path='/Contact' element={<Contact />} />
                    </Routes>
                </BrowserRouter>
            </nav>
        </div>
    );
};
export default Nav;

/* <div className='container-fluid'>
                <BrowserRouter>
                    <Link to='/Home'>Home</Link>
                    <Routes>
                        <Route path='/Home' element={<Home />} />
                    </Routes>
                </BrowserRouter>
</div>*/
