import React, { useRef, useState } from "react";
import "./NavigationBar.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import img_1 from "../../assets/slider/one.jpg";
import img_2 from "../../assets/slider/two.jpg";
import img_4 from "../../assets/slider/four.jpg";
import img_5 from "../../assets/slider/five.jpg";
import img_6 from "../../assets/slider/six.jpg";
import img_7 from "../../assets/slider/seven.jpg";
import img_8 from "../../assets/slider/eight.jpg";
import { Navigation } from "swiper";
const NavigationBar = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
          <div className="swiper-image-container relative">
            <img className="h-5/6" src={img_2} alt="" />
            <div className="image-overlay absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
            <div className="text-overlay absolute top-0 left-0 lg:top-[20%] lg:left-[20%] p-5 text-white">
              <div>
                <h2>Image 1</h2>
                <p>Some description about the image goes here...</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      <SwiperSlide>
          <div className="swiper-image-container relative">
            <img className="h-5/6" src={img_4} alt="" />
            <div className="image-overlay absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
            <div className="text-overlay absolute top-0 left-0 lg:top-[20%] lg:left-[20%] p-5 text-white">
              <div>
                <h2>Image 1</h2>
                <p>Some description about the image goes here...</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      <SwiperSlide>
          <div className="swiper-image-container relative">
            <img className="h-5/6" src={img_1} alt="" />
            <div className="image-overlay absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
            <div className="text-overlay absolute top-0 left-0 lg:top-[20%] lg:left-[20%] p-5 text-white">
              <div>
                <h2>Image 1</h2>
                <p>Some description about the image goes here...</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      <SwiperSlide>
          <div className="swiper-image-container relative">
            <img className="h-5/6" src={img_5} alt="" />
            <div className="image-overlay absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
            <div className="text-overlay absolute top-0 left-0 lg:top-[20%] lg:left-[20%] p-5 text-white">
              <div>
                <h2>Image 1</h2>
                <p>Some description about the image goes here...</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      <SwiperSlide>
          <div className="swiper-image-container relative">
            <img className="h-5/6" src={img_6} alt="" />
            <div className="image-overlay absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
            <div className="text-overlay absolute top-0 left-0 lg:top-[20%] lg:left-[20%] p-5 text-white">
              <div>
                <h2>Image 1</h2>
                <p>Some description about the image goes here...</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      <SwiperSlide>
          <div className="swiper-image-container relative">
            <img className="h-5/6" src={img_7} alt="" />
            <div className="image-overlay absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
            <div className="text-overlay absolute top-0 left-0 lg:top-[20%] lg:left-[20%] p-5 text-white">
              <div>
                <h2>Image 1</h2>
                <p>Some description about the image goes here...</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      <SwiperSlide>
          <div className="swiper-image-container relative">
            <img className="h-5/6" src={img_8} alt="" />
            <div className="image-overlay absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
            <div className="text-overlay absolute top-0 left-0 lg:top-[20%] lg:left-[20%] p-5 text-white">
              <div>
                <h2>Image 1</h2>
                <p>Some description about the image goes here...</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      
      </Swiper>
    </div>
  );
};

export default NavigationBar;
