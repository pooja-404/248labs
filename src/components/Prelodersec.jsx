import React from "react";
import logo from "../assets/images/roadmapkite.png";
const Preloadersec = () => {
    return (
        <div className="min-vh-100 bg-nextsec px-3 bg-black z-3 position-fixed  flex-column duration-100 overflow-hidden d-flex justify-content-center align-items-center top-0 left-0 right-0 w-100">
            <img src={logo} alt="logo" className="animation" />
            <div className="loader d-flex align-items-center gap-2 px-3 pt-4">
                <p className="font-roboto text-white fw-bold fs-xl px-3 text-nowrap">248-Labs</p>
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