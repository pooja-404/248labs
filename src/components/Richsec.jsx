import React from 'react'
import richworld from '../assets/images/richworld.webp'

function Richsec() {
    return (
        <div className='py-lg-5 position-relative z-1 overflow-hidden'>
            <div className="container py-lg-5 pt-4">
                <h2 className='font-roboto fs-xl fw-bold lh-62 text-white text-center pb-4' data-aos="zoom-in">A rich, inhabited, and licensable world.</h2>
                <div className='position-relative'>
                    <img src={richworld} alt="richwold" className='border-radius-img w-100 h_richworld object-fit-cover' />
                    <a href="https://www.youtube.com/watch?v=wroGPb4-3yM" className=" position-absolute vedio-btn" target='blank'>
                        <svg className='svg-w' width="76" height="77" viewBox="0 0 76 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="37.9999" cy="38.3456" r="37.7616" fill="white" fillOpacity="0.41" />
                            <path d="M51.8164 37.48C52.4831 37.8649 52.4831 38.8272 51.8164 39.2121L32.0976 50.5968C31.4309 50.9817 30.5976 50.5005 30.5976 49.7307L30.5976 26.9614C30.5976 26.1916 31.4309 25.7105 32.0976 26.0954L51.8164 37.48Z" fill="url(#paint0_linear_2003_456)" />
                            <defs>
                                <linearGradient id="paint0_linear_2003_456" x1="52.4509" y1="23.2002" x2="17.6861" y2="41.9989" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#D4145A" />
                                    <stop offset="1" stopColor="#FBB03B" />
                                </linearGradient>
                            </defs>
                        </svg>

                    </a>
                </div>
                <p className='font-roboto fs-s fw-normal lh-24 off-gray text-center pt-4' data-aos="zoom-in-down"> Illustrated with original artwork and a cinematic score, destined not only for mobile and desktop gaming but <span className='d-lg-block'>also for film and television, events, merchandising, and partnerships.</span></p>
            </div>
            <div className='rich-ellipse position-absolute end-0 rich-top z-n1 d-none d-lg-block'></div>

        </div>
    )
}
export default Richsec
