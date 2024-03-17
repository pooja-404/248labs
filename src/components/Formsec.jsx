import React from 'react'

function Formsec() {
    return (
        <div className='formsec-bg mt-lg-5'>
            <div className="container">
                <div className="row pt-lg-5">
                    <div className="col-xl-7 pt-lg-5" data-aos="fade-right">
                        <div className="form-card box pb-5 pt-3   border-radius-img px-5 mt-md-5 ">
                            <h2 className='font-roboto fs-xl fw-bold lh-62 text-white  pb-3'>Get updated with us</h2>
                            <form>
                                <div className='d-md-flex w-100 gap-3'>
                                    <div>
                                        <p className='font-roboto fs-s fw-medium lh-18 text-white mb-0 pb-3'>First Name</p>
                                        <input type="text" placeholder='' className='outline-none form-w py-3 font-roboto lh-20 fw-normal fs-xs off-gray px-2 ' />
                                    </div>
                                    <div>
                                        <p className='font-roboto fs-s fw-medium lh-18 text-white mb-0 pb-3 '>Last Name</p>
                                        <input type="text" placeholder='' className='outline-none form-w py-3 font-roboto lh-20 fw-normal fs-xs off-gray px-2 ' />
                                    </div>

                                </div>
                                <div className='d-md-flex w-100 gap-3 pt-4'>
                                    <div>
                                        <p className='font-roboto fs-s fw-medium lh-18 text-white  mb-0 pb-3'>Phone Number</p>
                                        <input type="text" placeholder='' className='outline-none form-w py-3 font-roboto lh-20 fw-normal fs-xs off-gray px-2 ' />
                                    </div>
                                    <div>
                                        <p className='font-roboto fs-s fw-medium lh-18 text-white mb-0 pb-3 '>Email</p>
                                        <input type="g-mail" placeholder='' className='outline-none form-w py-3 font-roboto lh-20 fw-normal fs-xs off-gray px-2 ' />
                                    </div>

                                </div>
                            </form>
                            <div className='d-flex gap-3 pt-3 '>
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.8672 0.442871H2.86719C1.75719 0.442871 0.867188 1.34287 0.867188 2.44287V16.4429C0.867188 17.5429 1.75719 18.4429 2.86719 18.4429H16.8672C17.9772 18.4429 18.8672 17.5429 18.8672 16.4429V2.44287C18.8672 1.34287 17.9772 0.442871 16.8672 0.442871ZM7.86719 14.4429L2.86719 9.44287L4.27719 8.03287L7.86719 11.6129L15.4572 4.02287L16.8672 5.44287L7.86719 14.4429Z" fill="white" />
                                </svg>
                                <p className='font-roboto fs-sm fw-normal lh-21 text-white'>By sending this form I confirm that I have read and accept the <span className='font-poppins fw-semibold'> Privacy <span className='d-lg-block'> Policy</span>
                                </span></p>

                            </div>
                            <button className='font-roboto fs-s fw-medium lh-28 text-white common-btn five   border-0'>Subscribe</button>
                        </div>
                    </div>
                    <div className="col-xl-4 pt-5 d-flex justify-content-center align-content-around flex-column" data-aos="fade-left">
                        <h2 className='font-roboto fs-md fw-normal lh-28 text-white'>Stay updated</h2>
                        <p className='font-roboto fs-s lh-24 fw-normal off-gray'>At 248 Labs, our constant pursuit is to build engaging games that spared joy. Don’t hesitate to reach out to us with your thoughts and messages - we are all ears!</p>
                        <h2 className='font-roboto fs-md fw-normal lh-28 text-white'>Address</h2>
                        <p className='font-roboto fs-s lh-24 fw-normal off-gray'>390 Orchard Road, 03-07, Palais Renaissance.</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Formsec
