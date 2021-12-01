import React from "react";
import "./css/bootstrap.css";
import "./Contact.css";
const Contact = () => {
    return (
        <main>
            <div className='container-fluid first'>
                <div className='d-flex justify-content-center'>
                    <div className='titles'>
                        <h2 className='text-color text-center text-uppercase mt-4 animate__animated animate__fadeInDown' style={{ animationDuration: "2s" }}>
                            Contact
                        </h2>
                    </div>
                </div>
                <div className='container-fluid order-div animate__animated animate__fadeInLeft' style={{ animationDuration: "2s" }}>
                    <div className='row'>
                        <div className='col-lg-6 padding-col px-5'>
                            <h3 id='center-location'>Location</h3>
                            <iframe
                                id='location-map'
                                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.886406634586!2d19.83198521537575!3d45.25008975572589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b104085b05c0d%3A0x20bac4cb92a51304!2z0JXQotCoIOKAntCc0LjRhdCw0ZjQu9C-INCf0YPQv9C40L3igJ0!5e0!3m2!1ssr!2srs!4v1638105635150!5m2!1ssr!2srs'
                                width='600'
                                height='450'
                                allowfullscreen=''
                                loading='lazy'
                            ></iframe>
                        </div>
                        <div className='col-lg-6 padding-col'>
                            <div className='container-fluid'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <h3 id='center-location'>Contact informations</h3>
                                    </div>
                                    <div className='col-12 padding-info gornja-margina'>
                                        <p>
                                            <span className='spanovi'>
                                                <i className='bi bi-calendar-fill icon-size'></i> Working time :
                                            </span>
                                            <br />
                                            <span className='uvuci'>Work day : 8:00h - 22:00h</span>
                                            <br />
                                            <span className='uvuci'>Weekend : 8:00h - 14:00h</span>
                                        </p>
                                    </div>
                                    <div className='col-12 padding-info'>
                                        <p>
                                            <span className='spanovi'>
                                                <i className='bi bi-geo-alt-fill icon-size'></i> Location :
                                            </span>{" "}
                                            FutoškNavLink 17, Novi Sad
                                        </p>
                                    </div>
                                    <div className='col-12 padding-info'>
                                        <p>
                                            <span className='spanovi'>
                                                <i className='bi bi-telephone-fill icon-size'></i> Mobile number :
                                            </span>{" "}
                                            1234567890
                                        </p>
                                    </div>
                                    <div className='col-12 padding-info'>
                                        <p>
                                            <span className='spanovi'>
                                                <i className='bi bi-envelope-fill icon-size'></i> E-Mail :
                                            </span>{" "}
                                            make.pancake@gmail.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default Contact;
