import React, { Fragment } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function slider(){
  return(
    <div id="home" className="slider-area single-banner-html">
        <div className="bend niceties preview-2">
            <div className="slides">
                <img src={require("../assets/images/slider/s3.jpg")} className="img-responsive" alt="" title="#slider-direction-3" />
            </div>

            <div id="slider-direction-1" className="slider-direction nivo-caption">
                <div className="slider-content t-cn s-tb slider-2">
                    <div className="title-container s-tb-c">
                        <h3 className="title3">Hello I am RAZZ</h3>
                        <h1 className="title1">Web <span className="typed"></span></h1>
                    </div>
                </div>
            </div>
            <a href="#about-sec"><div className="mouse"></div></a>
        </div>
    </div>

)}
export default slider;
