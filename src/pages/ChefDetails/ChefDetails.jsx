import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import "./ChefDetails.css";

import { useLoaderData } from "react-router-dom";
import { FaRegHeart, FaRegStar } from "react-icons/fa";

const ChefDetails = () => {
  const chefDetailsInfo = useLoaderData();
  const {
    name,
    years_of_exp,
    num_of_recipes,
    likes,
    chef_img,
    ratings,
    recipes_name,
    recipes_img,
    bio,
  } = chefDetailsInfo;
  return (
    <div>
      <div class=" flex items-center justify-center">
        <div class="container max-w-3xl bg-white rounded dark:bg-gray-800 shadow-lg transform duration-200 easy-in-out m-12">
          <div class="h-1/4 sm:h-96 overflow-hidden">
            <img
              class="w-full rounded-t"
              src={chef_img}
              alt="Photo by aldi sigun on Unsplash"
            />
          </div>
          <div class="flex justify-start px-5 -mt-12 mb-5">
            <span clspanss="block relative h-48 w-48">
              <img
                alt={name}
                src={chef_img}
                class="mx-auto object-cover rounded-full h-24 w-24 bg-white p-1"
              />
            </span>
          </div>
          <div class="">
            <div class="px-7 mb-8">
              <h2 class="text-3xl font-bold text-green-800 dark:text-gray-300">
                {name}
              </h2>
              <div className="py-2 text-green-800 font-semibold">
                <p>Experience : {years_of_exp}</p>
                <p>Number of Recipes : {num_of_recipes}</p>
              </div>

              <p class="mt-2 text-gray-600 dark:text-gray-300">{bio}</p>

              <div className="flex justify-between py-5">
                <FaRegStar></FaRegStar>
                <FaRegHeart className="text-pink-600 cursor-pointer"></FaRegHeart>
              </div>

              <div>
                <label htmlFor="my-modal-5" className="btn btn-outline btn-accent">
                  See Top Recipe 
                </label>
                <input
                  type="checkbox"
                  id="my-modal-5"
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className="modal-box  max-w-7xl">
                    <Swiper
                      effect={"coverflow"}
                      grabCursor={true}
                      centeredSlides={true}
                      slidesPerView={"auto"}
                      coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                      }}
                      pagination={true}
                      modules={[EffectCoverflow, Pagination]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <img src={recipes_img?.dish_1_img} />
                        <div className="p-2">
                          <p className="text-xl font-bold">
                            {recipes_name?.dish_1_name}
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={recipes_img?.dish_2_img} />
                        <div className="p-2">
                          <p className="text-xl font-bold">
                          
                            {recipes_name?.dish_2_name}
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={recipes_img?.dish_3_img} />
                        <div className="p-2">
                          <p className="text-xl font-bold">
                            {recipes_name?.dish_3_name}
                          </p>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                    <div className="modal-action">
                      <label htmlFor="my-modal-5" className="btn btn-outline btn-success btn-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
