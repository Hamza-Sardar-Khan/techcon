"use client"

import React from "react";
import Slider from "react-slick";
import { FaCirclePlay } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Movies from "./components/movies";
const Home = () => {
  var settings = {
    infinite: true,        
    speed: 500,            
    slidesToShow: 1,       
    slidesToScroll: 1,     
    autoplay: true,        
    autoplaySpeed: 3000,  
    pauseOnHover: false, 
  };
  return (
    <div>
      <Slider {...settings} className="w-screen h-screen">
      <div className="slider">
        <img src="/1.jpg"  alt="" />
        <div className="absolute glass padding top-[50%] right-3 sm:right-10 w-[90%] h-[40%] sm:w-[500px] sm:h-[300px] bg-black  border border-white rounded-lg z-10">
            <h1 className="oif font-bold text-4xl sm:text-6xl">The Penguin</h1>

            <p className="poppins mt-5">This Movie was released on 8th August-1972 , with more than 1 million copies being sold</p>

            <p className="text-white text-sm md:text-2xl font-bold " >Price : <span className="text-[#65FE08] text-lg md:text-4xl">$1800</span></p>
            <div className="buttons-container mt-5">
              <button className="button">
               <FaCirclePlay />
                Watch Trailer
              </button>
              <button className="second-button">
              <FaCartArrowDown />
                  Buy Now
              </button>
            </div>
        </div>
      </div>
      <div className="slider">
        <img src="/2.jpg" alt="" />
                <div className="absolute glass padding top-[50%] right-3 sm:right-10 w-[90%] h-[40%] sm:w-[500px] sm:h-[300px] bg-black  border border-white rounded-lg z-10">

            <h1 className="oif font-bold text-4xl sm:text-6xl">The Penguin</h1>

            <p className="poppins mt-5">This Movie was released on 8th August-1972 , with more than 1 million copies being sold</p>

            <p className="text-white text-sm md:text-2xl font-bold " >Price : <span className="text-[#65FE08] text-lg md:text-4xl">$1800</span></p>
            <div className="buttons-container mt-5">
              <button className="button">
               <FaCirclePlay />
                Watch Trailer
              </button>
              <button className="second-button">
              <FaCartArrowDown />
                  Buy Now
              </button>
            </div>
        </div>
      </div>
      <div className="slider">
        <img src="/3.jpg" alt="" />
                <div className="absolute glass padding top-[50%] right-3 sm:right-10 w-[90%] h-[40%] sm:w-[500px] sm:h-[300px] bg-black  border border-white rounded-lg z-10">

            <h1 className="oif font-bold text-4xl sm:text-6xl">The Penguin</h1>

            <p className="poppins mt-5">This Movie was released on 8th August-1972 , with more than 1 million copies being sold</p>

            <p className="text-white text-sm md:text-2xl font-bold " >Price : <span className="text-[#65FE08] text-lg md:text-4xl">$1800</span></p>
            <div className="buttons-container mt-5">
              <button className="button">
               <FaCirclePlay />
                Watch Trailer
              </button>
              <button className="second-button">
              <FaCartArrowDown />
                  Buy Now
              </button>
            </div>
        </div>
      </div>
      <div className="slider">
        <img src="/4.jpg" alt="" />
                <div className="absolute glass padding top-[50%] right-3 sm:right-10 w-[90%] h-[40%] sm:w-[500px] sm:h-[300px] bg-black  border border-white rounded-lg z-10">

            <h1 className="oif font-bold text-4xl sm:text-6xl">The Penguin</h1>

            <p className="poppins mt-5">This Movie was released on 8th August-1972 , with more than 1 million copies being sold</p>

            <p className="text-white text-sm md:text-2xl font-bold " >Price : <span className="text-[#65FE08] text-lg md:text-4xl">$1800</span></p>
            <div className="buttons-container mt-5">
              <button className="button">
               <FaCirclePlay />
                Watch Trailer
              </button>
              <button className="second-button">
              <FaCartArrowDown />
                  Buy Now
              </button>
            </div>
        </div>
      </div>
      <div className="slider">
        <img src="/5.png" alt="" />
                <div className="absolute glass padding top-[50%] right-3 sm:right-10 w-[90%] h-[40%] sm:w-[500px] sm:h-[300px] bg-black  border border-white rounded-lg z-10">

            <h1 className="oif font-bold text-4xl sm:text-6xl">The Penguin</h1>

            <p className="poppins mt-5">This Movie was released on 8th August-1972 , with more than 1 million copies being sold</p>

            <p className="text-white text-sm md:text-2xl font-bold " >Price : <span className="text-[#65FE08] text-lg md:text-4xl">$1800</span></p>
            <div className="buttons-container mt-5">
              <button className="button">
               <FaCirclePlay />
                Watch Trailer
              </button>
              <button className="second-button">
              <FaCartArrowDown />
                  Buy Now
              </button>
            </div>
        </div>
      </div>
     
      </Slider>

      <Movies />
    </div>
  )
}

export default Home