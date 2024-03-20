import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from 'react'
import sliderimg1 from '../assets/images/sliderimg1.webp'
import sliderimg2 from '../assets/images/sliderimg2.webp'
import sliderimg3 from '../assets/images/sliderimg3.webp'
import sliderimg4 from '../assets/images/sliderimg4.webp'
import sliderimg5 from '../assets/images/sliderimg5.webp'

function Slidersec() {
    var settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 2500,
        arrows: false,
        variableWidth: false,
        autoplaySpeed: 0,
        cssEase: "linear",
        autoplay: true,
        variableWidth: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    CenterMode: true,
                    arrow: false,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 838,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    CenterMode: true,
                    arrow: false,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    CenterMode: true,
                    dots: false,
                    arrow: false,
                    variableWidth: true,

                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    CenterMode: true,
                    dots: false,
                    arrow: false,
                    variableWidth: true,
                }
            }
        ]
    };
    return (
        <div className="py-lg-5 overflow-hidden">
            <div className="container py-5">
                <Slider {...settings} className="slider-align pt-5">
                    <div className="px-4 mx-lg-0 d-flex align-items-end justify-content-center slider-size ">
                        <img src={sliderimg1} alt="slider" className="opicity" />
                    </div>
                    <div className="px-4 mx-lg-0 d-flex align-items-end justify-content-center  slider-size ">
                        <img src={sliderimg2} alt="slider" className="opicity" />
                    </div>
                    <div className="px-4 d-flex align-items-end justify-content-center slider-size ">
                        <img src={sliderimg3} alt="slider" className="opicity" />
                    </div>
                    <div className="px-4 mx-lg-0 d-flex align-items-end justify-content-center slider-size ">
                        <img src={sliderimg4} alt="slider" className="opicity" />
                    </div>
                    <div className="px-4 mx-lg-0 d-flex align-items-end justify-content-center slider-size  ">
                        <img src={sliderimg5} alt="slider" className="opicity" />
                    </div>

                </Slider >
            </div>
        </div>
    );
}


export default Slidersec

