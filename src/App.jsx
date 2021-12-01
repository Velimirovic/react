import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Order from "./components/Order/Order";
import Create from "./components/Create/Create";
import Menu from "./components/Menu/Menu";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import { Route, Routes } from "react-router";
import Logo from "./components/images/One4All_Logo.png";
import userpic from "./components/images/user.png";
import "./css/bootstrap.min.css";
import "./App.css";
import slidza from "./components/images/One4All_Logo.png";
import Register from "./components/Register/Register";

const App = () => {
    // const [pancakes, setPancakes] = useState([]);

    // const getData = () => {
    //     fetch(BACKEND_URL)
    //         .then((response) => response.json())
    //         .then((data) => setPancakes(data));
    // };

    // useEffect(() => getData(), []);

    // const onTodoAdded = (pancake) => {
    //     fetch(BACKEND_URL, {
    //         method: "POST",
    //         body: JSON.stringify({
    //             name: pancake.name,
    //             price: pancake.price,
    //             description: "Cookie, Orea, Banana, Strawberry, Chocolate, Something",
    //             pancakeType: pancake.pancakeType,
    //             maker: pancake.maker,
    //         }),
    //         headers: {
    //             "Content-type": "application/json; charset=UTF-8",
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             let newPancakes = [...pancakes, data];
    //             setTodos(newPancakes);
    //         });
    // };

    // return (
    // <>
    // <BrowserRouter>
    //   <div>
    //     <Header />
    //   </div>
    //   <Routes>
    //     <Route path="/" element={<TodoContainer onTodoAdded={onTodoAdded} todos={todos}/>}/>
    //     <Route path="/about" element={<About/>}/>
    //   </Routes>
    // </BrowserRouter>
    // </>

    // );

    return (
        <div className='App'>
            <div>
            <div className='container-fluid'>
                <nav className='navbar navbar-expand-lg navbar-dark bg-dark  nav-padding h-auto'>
                    <div className='container-fluid'>
                        <BrowserRouter>
                            <Link className='navbar-brand logo' to=''>
                                <article className='logo_down'>
                                    <img src={Logo} alt='' />
                                </article>
                            </Link>
                            <button
                                className='navbar-toggler'
                                type='button'
                                data-bs-toggle='collapse'
                                data-bs-target='#navbarSupportedContent'
                                aria-controls='navbarSupportedContent'
                                aria-expanded='false'
                                aria-label='Toggle navigation'
                            >
                                <span className='navbar-toggler-icon'></span>
                            </button>
                        </BrowserRouter>
                        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                                <BrowserRouter>
                                    <li className='nav-item'>
                                        <Link
                                            className='nav-link active hoverclass'
                                            onClick={() => {
                                                window.location.href = "/";
                                            }}
                                            to='/'
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link
                                            className='nav-link active hoverclass'
                                            onClick={() => {
                                                window.location.href = "/Order";
                                            }}
                                            to='/Order'
                                        >
                                            Order
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link
                                            className='nav-link active hoverclass'
                                            onClick={() => {
                                                window.location.href = "/Create";
                                            }}
                                            to='/Create'
                                        >
                                            Create
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link
                                            className='nav-link active hoverclass'
                                            onClick={() => {
                                                window.location.href = "/Menu";
                                            }}
                                            to='/Menu'
                                        >
                                            Menu
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link
                                            className='nav-link active hoverclass'
                                            onClick={() => {
                                                window.location.href = "/Contact";
                                            }}
                                            to='/Contact'
                                        >
                                            Conctact
                                        </Link>
                                    </li>
                                </BrowserRouter>
                            </ul>
                        </div>

                            <form className='d-flex'>
                                <BrowserRouter>
                                    <Link
                                        className='nav-link active '
                                        onClick={() => {
                                            window.location.href = "/Login";
                                        }}
                                        to='/Login'
                                    >
                                        <img src={userpic} alt='' />
                                    </Link>
                                </BrowserRouter>
                            </form>
                    </div>
                </nav>
            </div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Order' element={<Order />} />
                    <Route path='/Create' element={<Create />} />
                    <Route path='/Menu' element={<Menu />} />
                    <Route path='/Contact' element={<Contact />} />
                    <Route path='/Login' element={<Login />} />
                    <Route path='/Register' element={<Register />} />
                </Routes>
            </BrowserRouter>
            <footer>
            <div className='container-fluid '>
                <div className='footer-top d-flex'>
                    <div className='col-md-2 col-lg-4 text-center footer-top-content'>
                        <ul className='list-group footer-list'>
                            <BrowserRouter>
                                <li className='list-group'>
                                    <Link
                                        className='nav-link active'
                                        onClick={() => {
                                            window.location.href = "/";
                                        }}
                                        to='/'
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className='list-group'>
                                    <Link
                                        className='nav-link active'
                                        onClick={() => {
                                            window.location.href = "/Order";
                                        }}
                                        to='/Order'
                                    >
                                        Order
                                    </Link>
                                </li>
                                <li className='list-group'>
                                    <Link
                                        className='nav-link active'
                                        onClick={() => {
                                            window.location.href = "/Create";
                                        }}
                                        to='/Create'
                                    >
                                        Create
                                    </Link>
                                </li>
                                <li className='list-group'>
                                    <Link
                                        className='nav-link active'
                                        onClick={() => {
                                            window.location.href = "/Menu";
                                        }}
                                        to='/Menu'
                                    >
                                        Menu
                                    </Link>
                                </li>
                                <li className='list-group'>
                                    <Link
                                        className='nav-link active'
                                        onClick={() => {
                                            window.location.href = "/Contact";
                                        }}
                                        to='/Contact'
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </BrowserRouter>
                        </ul>
                         </div>      
                    
                </div>
            </div>
            </footer>
        </div>
        </div>
    );
};

export default App;
