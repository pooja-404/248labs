
import React, { useRef, useState } from "react";
import formlayer from '../assets/images/formlayer.png'

const FormSec = () => {
    const checkRef = useRef(null);
    const [formData, setFormData] = useState({
        FirstName: "",
        LastName: "",
        number: "",
        email: "",
    });
    const [formErrors, setFormErrors] = useState({
        FirstName: "",
        LastName: "",
        number: "",
        email: "",
    });
    const [showPopup, setShowPopup] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        const regex = {
            FirstName: /^[a-zA-Z\s]+$/,
            LastName: /^[a-zA-Z\s]+$/,
            number: /^\d{10}$/,
            email:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        };
        const errors = {};
        if (!regex.FirstName.test(formData.FirstName)) {
            errors.FirstName = "First Name is invalid.";
        }
        if (!regex.LastName.test(formData.LastName)) {
            errors.LastName = "Last Name is invalid.";
        }
        if (!regex.number.test(formData.number)) {
            errors.number = "Number is invalid.";
        }
        if (!regex.email.test(formData.email)) {
            errors.email = "Email is invalid.";
        }

        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            setShowPopup(true);
        }
    };
    const handlePopupClose = () => {
        setShowPopup(false);
        setFormData({
            FirstName: "",
            LastName: "",
            number: "",
            email: "",
        });
        setFormErrors({
            FirstName: "",
            LastName: "",
            number: "",
            email: "",
        });
    };
    return (
        <div className="formsec-bg position-relative overflow-hidden " id="our">
            <div className="container py-lg-5 my-lg-5">
                <div className="row align-items-center pt-sm-5">
                    <div data-aos="fade-right" className="col-lg-7 col-12 ">
                        <div className="form-card w-100 px-lg-5 px-3  pt-lg-4 pb-5">
                            <h2 className='font-roboto fs-xl fw-bold lh-62 text-white '>Get updated with us</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="d-sm-flex gap-4 pt-lg-4">
                                    <div className="d-flex flex-column w_50 w_100 pt-2 pt-sm-0">
                                        {" "}
                                        <label
                                            htmlFor="FirstName"
                                            className="font-roboto fs-s fw-medium lh-18 text-white mb-0 pb-3 "
                                        >
                                            First Name
                                        </label>
                                        <div className="inputPlace">
                                            <input
                                                type="text"
                                                id="FirstName"
                                                name="FirstName"
                                                value={formData.FirstName}
                                                onChange={handleChange}
                                                placeholder="Park Seijun"
                                                className="font-roboto lh-20 fw-normal fs-xs off-gray form_input
                                                 form-w "
                                            />
                                        </div>
                                        {formErrors.FirstName && (
                                            <p className="error font-roboto">{formErrors.FirstName}</p>
                                        )}
                                    </div>
                                    <div className="d-flex flex-column w_50 w_100 pt-2 pt-sm-0">
                                        {" "}
                                        <label
                                            htmlFor="LastName"
                                            className="font-roboto fs-s fw-medium lh-18 text-white mb-0 pb-3 "
                                        >
                                            Last Name
                                        </label>
                                        <div className="inputPlace  ">
                                            <input
                                                type="text"
                                                id="LastName"
                                                name="LastName"
                                                value={formData.LastName}
                                                onChange={handleChange}
                                                placeholder="Sejiun"
                                                className="font-roboto lh-20 fw-normal fs-xs off-gray form_input form-w  "
                                            />
                                        </div>
                                        {formErrors.LastName && (
                                            <p className="error font-roboto">{formErrors.LastName}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="d-sm-flex gap-4 pt-sm-4">
                                    <div className="d-flex flex-column w_50 w_100 pt-2 pt-sm-0">
                                        {" "}
                                        <label
                                            htmlFor="number"
                                            className="font-roboto fs-s fw-medium lh-18 text-white mb-0 pb-3"
                                        >
                                            Phone Number
                                        </label>
                                        <div className="inputPlace  ">
                                            <input
                                                type="number"
                                                id="number"
                                                name="number"
                                                value={formData.number}
                                                onChange={handleChange}
                                                placeholder="+12 5858526478"
                                                className="font-roboto lh-20 fw-normal fs-xs off-gray form_input
                                                  form-w "
                                            />
                                        </div>
                                        {formErrors.number && (
                                            <p className="error font-roboto">{formErrors.number}</p>
                                        )}
                                    </div>
                                    <div className="d-flex flex-column w_50 w_100 pt-2 pt-sm-0">
                                        {" "}
                                        <label
                                            htmlFor="email"
                                            className="font-roboto fs-s fw-medium lh-18 text-white mb-0 pb-3"
                                        >
                                            Email
                                        </label>
                                        <div className="inputPlace  ">
                                            <input
                                                type="mail"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Park@458@Gmail.com"
                                                className="font-roboto lh-20 fw-normal fs-xs off-gray form_input form-w  "
                                            />
                                        </div>
                                        {formErrors.email && (
                                            <p className="error font-roboto lh-20 fw-normal fs-xs off-gray">{formErrors.email}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="d-flex gap-4 align-items-start pt-4">
                                    <input
                                        type="checkbox"
                                        id="checkbox"
                                        defaultChecked={false}
                                        ref={checkRef} className="input_size"
                                    />
                                    <p className="font-roboto fs-sm fw-normal lh-21 text-white pb-3">
                                        By sending this form I confirm that I have read and accept
                                        the <span className="fw-bold">Privacy <span className="d-lg-block">Policy</span></span>
                                    </p>
                                </div>
                                {formErrors.checkbox && (
                                    <p className="error font-roboto">{formErrors.checkbox}</p>
                                )}
                                <button className='font-roboto fs-s fw-medium lh-28 text-white common-btn five   border-0'>Subscribe</button>
                            </form>
                            {showPopup && (
                                <div className="popup">
                                    <p className="font-roboto fw-medium fs_xmd mb-0 pb-2 text_Main">
                                        Form submitted successfully!
                                    </p>
                                    <button
                                        onClick={handlePopupClose}
                                        className="Nav_btn paddingClose mt-5"
                                    >
                                        Close
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                    <div data-aos="fade-left" className="col-lg-5 col-12 pt-4 pt-lg-0">

                        <h2 className='font-roboto fs-md fw-normal lh-28 text-white'>Stay updated</h2>
                        <p className='font-roboto fs-s lh-24 fw-normal off-gray'>At 248 Labs, our constant pursuit is to build engaging games that spared joy. Don’t hesitate to reach out to us with your thoughts and messages - we are all ears!</p>
                        <h2 className='font-roboto fs-md fw-normal lh-28 text-white'>Address</h2>
                        <a
                            href="https://maps.app.goo.gl/7pka2vLvmguW9CMS6"
                            target="blank"
                            className="font-roboto fs-s lh-24 fw-normal off-gray"
                        >
                            390 Orchard Road, 03-07, Palais Renaissance.
                        </a>
                    </div>
                </div>
            </div>
            <img src={formlayer} alt="form" className="position-absolute form_layer  w-100" />
        </div>


    );
};

export default FormSec;
