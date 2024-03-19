import React from 'react'
import { useState } from 'react'
import logo from '../assets/images/logo.webp'
import hero from '../assets/images/headicon.png'
const Headersec = () => {
    const [show, setshow] = useState(true);
    if (show === false) {
        document.body.classList.add("overflow_hidden");
    } else {
        document.body.classList.remove("overflow_hidden");
    }

    return (
        <div className='bg-header min-vh-100 d-flex flex-column position-relative overflow-hidden'>
            <nav className="container py-2">
                <div className="d-flex align-items-center justify-content-between py-4">
                    <img src={logo} alt="Logo" className=" cursor-pointer navlogo " />
                    <>
                        <ul className={`${show ? "left_100" : "left_0"} nav_bar gap-4 d-flex ps-0`}>
                            <li onClick={() => setshow(!show)}>
                                <a
                                    className=" font-roboto gray fs-s navhover list-unstyled text-decoration-none fw-normal lh-24 nav_line position-relative"
                                    href="#home"
                                >
                                    About Us
                                </a>
                            </li>
                            <li onClick={() => setshow(!show)}>
                                <a
                                    className=" font-roboto gray fs-s navhover list-unstyled text-decoration-none fw-normal lh-24 nav_line position-relative"
                                    href="#our"
                                >
                                    Our Team
                                </a>
                            </li>
                            <li onClick={() => setshow(!show)}>
                                <a
                                    className="font-roboto gray fs-s navhover list-unstyled text-decoration-none fw-normal lh-24 nav_line position-relative"
                                    href="#roadmap"
                                >
                                    Roadmap
                                </a>
                            </li>
                           
                            <li className='main ps-3 pt-3 pt-lg-0'>
                                <a href="" className='font-roboto fs-sm fw-bold lh-27 text-white five common-btn'>Contact Us</a>
                            </li>

                        </ul>

                        <div
                            onClick={() => setshow(!show)}
                            className={`${show ? "" : "cross"} navline`}
                        >
                            <span className="crl-1"></span>
                            <span className="crl-2"></span>
                            <span className="crl-3"></span>
                        </div>
                    </>
                </div>
            </nav>
            <div className='flex-grow-1 d-flex align-items-center justify-content-center' id='home'>
                <div className="container">
                    <h2 className='font-roboto fs-xxl lh-86 text-white fw-bold text-center' data-aos="zoom-in" data-aos-duration="2000">Changing the way games <span className='d-lg-block'>are made</span> </h2>
                    <p className='font-roboto fs-md lh-28 text-white fw-normal text-center pt-2' data-aos="zoom-in" data-aos-duration="2000">Redefining the future of play</p>
                </div>
            </div>
            <img src={hero} alt="hero" className='position-abs olute bottom-0  mx-auto star t-50 ' />
            

        </div >
    )
}

export default Headersec