import React from "react";
const Preloadersec = () => {
    return (
        <div className="min-vh-100 bg-ne xtsec px-3 bg-black z-3 position-fixed  flex-column duration-100 overflow-hidden d-flex justify-content-center align-items-center top-0 left-0 right-0 w-100">
            <div className="loader d-flex align-items-center gap-1  pt-4">
                <p className="font-roboto text-white fw-bold fs-xl  text-nowrap">248-Labs</p>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="d-none d-sm-block"></span>
            </div>
        </div>
    );
};

export default Preloadersec;