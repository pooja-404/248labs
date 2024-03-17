import React from 'react'
import kite from '../assets/images/roadmapkite.png'
import flag from '../assets/images/flag.png'
import flag2 from '../assets/images/flag2.png'
import flag3 from '../assets/images/flag3.png'

function Roadmapsec() {
    return (
        <div className='py-5 position-relative z-1 roadmap-bg' id='roadmap'>
            <div className="container">
                <div className="d-flex justify-content-center mt-2"data-aos="zoom-in">
                    <button className='font-roboto fs-s lh-19 fw-normal graident-btnn color-gradient box border-0'>Road map</button>
                </div>
                <h2 className='font-roboto fs-xl fw-bold lh-62 text-white text-center mb-md-170'data-aos="zoom-in">Milestones and markers</h2>
                <div className="row main-timeline position-relative justify-content-end ms-5 ms-lg-0 mt-5 mt-md-0  ">
                    <div className="col-md-6">
                        <div className="roadmap-card px-3 border-radius-img d-flex justify-content-center flex-column position-relative box overflow-hidden margin-top-bottom" data-aos="flip-left">
                            <h3 className='font-roboto fs-xs lh-28 color-gradient fw-normal text-center'>Nov 2014</h3>
                            <p className="mb-0 font-roboto fs-md off-gray lh-28 fw-normal text-center ">Launched Bitcoin wallet</p>
                            <div className='card-shadow position-absolute '></div>
                        </div>
                        <div className="roadmap-card px-3 border-radius-img d-flex justify-content-center flex-column position-relative box overflow-hidden margin-top-botto mt-4" data-aos="flip-left">
                            <h3 className='font-roboto fs-xs lh-28 color-gradient fw-normal text-center'>Jan 2020</h3>
                            <div className='d-flex gap-2 justify-content-center '>
                                <p className="mb-0 font-roboto fs-md off-gray lh-28 fw-normal text-center">launch On</p>
                                <img src={flag} alt="flag" className='object-fit-contain' />
                                <img src={flag2} alt="flag" className='object-fit-contain' />
                                <img src={flag3} alt="flag" className='object-fit-contain' />
                            </div>
                            <div className='card-shadow position-absolute '></div>
                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <div className='ms-lg-60'>
                            <div className="roadmap-card px-3 border-radius-img d-flex justify-content-center flex-column  pb-5 position-relative box overflow-hidden mt-4 mt-lg-0 mx-lg-auto"data-aos="flip-right">
                                <h3 className='font-roboto fs-xs lh-28 color-gradient fw-normal text-center'>Oct 2014</h3>
                                <p className="mb-0 font-roboto fs-md off-gray lh-28 fw-normal text-center">Hired our first employee</p>
                                <div className='card-shadow position-absolute '></div>
                            </div>
                            <div className='mt-4'>
                                <div className="roadmap-card px-3 border-radius-img d-flex justify-content-center flex-column position-relative box overflow-hidden my-md-450 mx-lg-auto"data-aos="flip-right">
                                    <h3 className='font-roboto fs-xs lh-28 color-gradient fw-normal text-center'>Oct 2015</h3>
                                    <p className="mb-0 font-roboto fs-md off-gray lh-28 fw-normal text-center ">1st prize by Bit angels at Coin Agenda, Las Vegas</p>
                                    <div className='card-shadow position-absolute '></div>
                                </div>
                            </div>
                            <div className="roadmap-card  px-3 border-radius-img d-flex justify-content-center flex-column position-relative box overflow-hidden mt-4 mt-lg-0 mx-lg-auto"data-aos="flip-right">
                                <h3 className='font-roboto fs-xs lh-28 color-gradient fw-normal text-center'>Jan 2022</h3>
                                <p className="mb-0 font-roboto fs-md off-gray lh-28 fw-normal text-center ">Trusted by 10 Millions+ Users</p>
                                <span className='d-flex justify-content-center pt-3'>
                                    <svg width="152" height="31" viewBox="0 0 152 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.2257 4.88981C14.7265 3.34855 16.907 3.34856 17.4078 4.88982L18.9154 9.52969C19.1393 10.219 19.7816 10.6856 20.5064 10.6856H25.385C27.0056 10.6856 27.6794 12.7594 26.3683 13.7119L22.4214 16.5795C21.8351 17.0055 21.5897 17.7606 21.8137 18.4499L23.3213 23.0898C23.8221 24.631 22.058 25.9127 20.747 24.9601L16.8001 22.0925C16.2137 21.6665 15.4198 21.6665 14.8334 22.0925L10.8865 24.9601C9.57546 25.9127 7.81143 24.631 8.31221 23.0898L9.8198 18.4499C10.0438 17.7606 9.79841 17.0055 9.21209 16.5795L5.26517 13.7119C3.9541 12.7594 4.6279 10.6856 6.24848 10.6856H11.1271C11.8519 10.6856 12.4942 10.219 12.7181 9.52969L14.2257 4.88981Z" fill="#FFC839" />
                                        <path d="M44.33 5.19581C44.8141 3.6206 47.044 3.6206 47.5281 5.19582L48.8523 9.50422C49.0681 10.2064 49.7168 10.6856 50.4514 10.6856H54.926C56.524 10.6856 57.2123 12.7119 55.945 13.6853L52.1679 16.5863C51.6139 17.0118 51.3826 17.7367 51.5879 18.4045L52.9924 22.9741C53.4712 24.5319 51.6668 25.785 50.3743 24.7923L46.948 22.1608C46.3471 21.6992 45.511 21.6992 44.91 22.1608L41.4838 24.7923C40.1913 25.785 38.3869 24.5319 38.8657 22.9741L40.2702 18.4045C40.4754 17.7367 40.2441 17.0118 39.6901 16.5863L35.9131 13.6853C34.6458 12.7119 35.3341 10.6856 36.9321 10.6856H41.4067C42.1413 10.6856 42.7899 10.2064 43.0057 9.50422L44.33 5.19581Z" fill="#FFC839" />
                                        <path d="M74.4501 4.88981C74.9509 3.34855 77.1314 3.34856 77.6321 4.88982L79.1397 9.52969C79.3637 10.219 80.006 10.6856 80.7307 10.6856H85.6094C87.23 10.6856 87.9038 12.7594 86.5927 13.7119L82.6458 16.5795C82.0595 17.0055 81.8141 17.7606 82.0381 18.4499L83.5457 23.0898C84.0464 24.631 82.2824 25.9127 80.9713 24.9601L77.0244 22.0925C76.4381 21.6665 75.6441 21.6665 75.0578 22.0925L71.1109 24.9601C69.7998 25.9127 68.0358 24.631 68.5366 23.0898L70.0442 18.4499C70.2681 17.7606 70.0228 17.0055 69.4365 16.5795L65.4895 13.7119C64.1785 12.7594 64.8523 10.6856 66.4728 10.6856H71.3515C72.0762 10.6856 72.7186 10.219 72.9425 9.52969L74.4501 4.88981Z" fill="#FFC839" />
                                        <path d="M104.554 5.19581C105.038 3.6206 107.268 3.6206 107.752 5.19582L109.076 9.50422C109.292 10.2064 109.941 10.6856 110.676 10.6856H115.15C116.748 10.6856 117.436 12.7119 116.169 13.6853L112.392 16.5863C111.838 17.0118 111.607 17.7367 111.812 18.4045L113.216 22.9741C113.695 24.5319 111.891 25.785 110.598 24.7923L107.172 22.1608C106.571 21.6992 105.735 21.6992 105.134 22.1608L101.708 24.7923C100.415 25.785 98.611 24.5319 99.0898 22.9741L100.494 18.4045C100.7 17.7367 100.468 17.0118 99.9143 16.5863L96.1372 13.6853C94.8699 12.7119 95.5582 10.6856 97.1562 10.6856H101.631C102.365 10.6856 103.014 10.2064 103.23 9.50422L104.554 5.19581Z" fill="#FFC839" />
                                        <path d="M134.674 4.88981C135.175 3.34855 137.355 3.34856 137.856 4.88982L139.364 9.52969C139.588 10.219 140.23 10.6856 140.955 10.6856H145.834C147.454 10.6856 148.128 12.7594 146.817 13.7119L142.87 16.5795C142.284 17.0055 142.038 17.7606 142.262 18.4499L143.77 23.0898C144.271 24.631 142.507 25.9127 141.195 24.9601L137.249 22.0925C136.662 21.6665 135.868 21.6665 135.282 22.0925L131.335 24.9601C130.024 25.9127 128.26 24.631 128.761 23.0898L130.268 18.4499C130.492 17.7606 130.247 17.0055 129.661 16.5795L125.714 13.7119C124.403 12.7594 125.076 10.6856 126.697 10.6856H131.576C132.3 10.6856 132.943 10.219 133.167 9.52969L134.674 4.88981Z" fill="#FFC839" />
                                    </svg>
                                </span>
                                <div className='card-shadow position-absolute '></div>

                            </div>
                        </div>
                    </div>
                </div>
                <img src={kite} alt="kite" className='position-absolute roadmap-kite pt-120 kite-width' />
            </div>
            <div className='roadmap-ellipse position-absolute top-0 z-n1'></div>
            <p className='fs-2xl fw-bold lh-225 font-roboto  text-white opicity-6 position-absolute z-n1  roadmap-text-ellipse'>Roadmap</p>
        </div>
    )
}
export default Roadmapsec
