import React from 'react'
import footerlogo from '../assets/images/logo.webp'
import { FooterDiscord, FooterFacebook, FooterLinkin, FooterTwitter } from './Icons'
function Footersec() {
    const Dates = new Date()
    const year = Dates.getFullYear()
    return (
        <div className='position-relative overflow-hidden z-1 pt-5'>
            <div className="container pt-md-5" data-aos="zoom-in-up">
                <div className='d-flex justify-content-center'>
                    <img src={footerlogo} alt="logo" className='cursor-pointer mx-auto  ' />
                </div>
                <ul className=' d-flex justify-content-center gap-3 ps-0 pt-3 '>
                    <li><a href="#home" className='font-roboto fs-s lh-24 fw-normal off-gray nav_line position-relative navhover'>Home</a></li>
                    <li><a href="#roadmap" className='font-roboto fs-s lh-24 fw-normal off-gray nav_line position-relative navhover'>Roadmap</a></li>
                    <li><a href="#our" className='font-roboto fs-s lh-24 fw-normal off-gray nav_line position-relative navhover'>Team</a></li>
                    <li><a href="#about" className='font-roboto fs-s lh-24 fw-normal off-gray nav_line position-relative navhover'>About Us</a></li>
                </ul>
                <div className='d-flex gap-3 justify-content-center pb-5'>
                    <a href="https://www.twitter.com" target="_blank" className=" icon "><FooterTwitter /></a>
                    <a href="https://www.facebook.com/" target="_blank" className=" icon "><FooterFacebook /></a>
                    <a href="https://discord.com/" target="_blank" className=" icon "><FooterDiscord /></a>
                    <a href="https://in.linkedin.com/" target="_blank" className=" icon "><FooterLinkin /></a>
                </div>

            </div>
            <div className='footer-border'></div>
            <p className='font-roboto fs-xs lh-16 fw-normal off-gray text-center py-4 mb-0'>© {year} 248 Labs. All rights reserved</p>
            <div className='position absolute footer-ellipse  z-n1 d-lg-block d-none '></div>
            <div className=' footer-ellipse-right  z-n1 d-lg-block d-none'></div>
        </div>
    )
}
export default Footersec
