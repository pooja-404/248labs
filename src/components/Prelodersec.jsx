import React from "react";
import logo from "../assets/images/logo.png";
const Preloadersec = () => {
    return (
        <div className="min-vh-100 bg-black z-3 position-fixed  flex-column duration-100 overflow-hidden d-flex justify-content-center align-items-center top-0 left-0 right-0 w-100">
            {/* <div className="position-relative d-flex justify-content-center animati on align-items-center ">
            </div> */}
            <img src={logo} alt="logo" />
            <div className="loader d-flex align-items-center gap-2">
                <p className="font-roboto text-white fw-bold fs-xl">Loading</p>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default Preloadersec;