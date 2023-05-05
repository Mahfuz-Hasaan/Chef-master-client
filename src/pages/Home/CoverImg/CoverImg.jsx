import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import './CoverImg.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import img_2 from "../../../assets/slider/two.jpg";
import img_4 from "../../../assets/slider/four.jpg";
import img_5 from "../../../assets/slider/five.jpg";
import img_6 from "../../../assets/slider/six.jpg";
import img_7 from "../../../assets/slider/seven.jpg";
import img_8 from "../../../assets/slider/eight.jpg";
import img_1 from "../../../assets/slider/one.jpg";

const CoverImg = () => {
  return (
    <div>
      <Carousel>
        <div>
          <div>
            <LazyLoadImage className="h-5/6" src={img_2} alt="" placeholderSrc='https://via.placeholder.com/150' effect="blur" />
            <div className="image-overlay absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
            <div className="text-overlay absolute left-[-10%] top-[10%] lg:top-[40%] lg:left-[20%] p-5 text-white">
              <div className="">
                <p className="text-2xl lg:text-6xl pl-10 lg:pl-0 font-semibold">
                  Welcome to Master Chef
                </p>
                <p className="pl-20 py-5 lg:text-2xl lg:pr-0 pr-5">
                  Choose healthy. Be strong. Live long.We are providing the best
                  AMERICAN FOOD.
                  <br />
                  Here we are going to show you top 9 Chef in America and their top American dishes!!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <LazyLoadImage className="h-5/6" src={img_4} alt="" placeholderSrc='https://via.placeholder.com/150' effect="blur"/>
            <div className="image-overlay absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
            <div className="text-overlay absolute left-[-10%] top-[10%] lg:top-[40%] lg:left-[20%] p-5 text-white">
              <div className="">
                <p className="text-2xl lg:text-6xl pl-10 lg:pl-0 font-semibold">
                  Welcome to Master Chef
                </p>
                <p className="pl-20 py-5 lg:text-2xl lg:pr-0 pr-5">
                  Choose healthy. Be strong. Live long.We are providing the best
                  AMERICAN FOOD.
                  <br />
                  Here we are going to show you top 9 Chef in America and their top American dishes!!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <LazyLoadImage className="h-5/6" src={img_5} alt="" placeholderSrc='https://via.placeholder.com/150' effect="blur"/>
            <div className="image-overlay absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
            <div className="text-overlay absolute left-[-10%] top-[10%] lg:top-[40%] lg:left-[20%] p-5 text-white">
              <div className="">
                <p className="text-2xl lg:text-6xl pl-10 lg:pl-0 font-semibold">
                  Welcome to Master Chef
                </p>
                <p className="pl-20 py-5 lg:text-2xl lg:pr-0 pr-5">
                  Choose healthy. Be strong. Live long.We are providing the best
                  AMERICAN FOOD.
                  <br />
                  Here we are going to show you top 9 Chef in America and their top American dishes!!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <LazyLoadImage className="h-5/6" src={img_6} alt="" placeholderSrc='https://via.placeholder.com/150' effect="blur"/>
            <div className="image-overlay absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
            <div className="text-overlay absolute left-[-10%] top-[10%] lg:top-[40%] lg:left-[20%] p-5 text-white">
              <div className="">
                <p className="text-2xl lg:text-6xl pl-10 lg:pl-0 font-semibold">
                  Welcome to Master Chef
                </p>
                <p className="pl-20 py-5 lg:text-2xl lg:pr-0 pr-5">
                  Choose healthy. Be strong. Live long.We are providing the best
                  AMERICAN FOOD.
                  <br />
                  Here we are going to show you top 9 Chef in America and their top American dishes!!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <LazyLoadImage className="h-5/6" src={img_7} alt="" placeholderSrc='https://via.placeholder.com/150' effect="blur"/>
            <div className="image-overlay absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
            <div className="text-overlay absolute left-[-10%] top-[10%] lg:top-[40%] lg:left-[20%] p-5 text-white">
              <div className="">
                <p className="text-2xl lg:text-6xl pl-10 lg:pl-0 font-semibold">
                  Welcome to Master Chef
                </p>
                <p className="pl-20 py-5 lg:text-2xl lg:pr-0 pr-5">
                  Choose healthy. Be strong. Live long.We are providing the best
                  AMERICAN FOOD.
                  <br />
                  Here we are going to show you top 9 Chef in America and their top American dishes!!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <LazyLoadImage className="h-5/6" src={img_8} alt="" placeholderSrc='https://via.placeholder.com/150' effect="blur"/>
            <div className="image-overlay absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
            <div className="text-overlay absolute left-[-10%] top-[10%] lg:top-[40%] lg:left-[20%] p-5 text-white">
              <div className="">
                <p className="text-2xl lg:text-6xl pl-10 lg:pl-0 font-semibold">
                  Welcome to Master Chef
                </p>
                <p className="pl-20 py-5 lg:text-2xl lg:pr-0 pr-5">
                  Choose healthy. Be strong. Live long.We are providing the best
                  AMERICAN FOOD.
                  <br />
                  Here we are going to show you top 9 Chef in America and their top American dishes!!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <LazyLoadImage className="h-5/6" src={img_1} alt="" placeholderSrc='https://via.placeholder.com/150' effect="blur"/>
            <div className="image-overlay absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
            <div className="text-overlay absolute left-[-10%] top-[10%] lg:top-[40%] lg:left-[20%] p-5 text-white">
              <div className="">
                <p className="text-2xl lg:text-6xl pl-10 lg:pl-0 font-semibold">
                  Welcome to Master Chef
                </p>
                <p className="pl-20 py-5 lg:text-2xl lg:pr-0 pr-5">
                  Choose healthy. Be strong. Live long.We are providing the best
                  AMERICAN FOOD.
                  <br />
                  Here we are going to show you top 9 Chef in America and their top American dishes!!
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </Carousel>
    </div>
  );
};

export default CoverImg;
