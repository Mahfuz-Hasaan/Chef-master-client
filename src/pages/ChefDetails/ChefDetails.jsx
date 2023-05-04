import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import "./ChefDetails.css";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import { useLoaderData } from "react-router-dom";
import { FaRegHeart, FaRegStar, FaHeart } from "react-icons/fa";

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
    ingredients,
    cooking_method,
  } = chefDetailsInfo;

  const handleLike = () => {
    toast("you have liked the recipe!!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div>
      
      <div className=" flex items-center justify-center">
        <div className="container max-w-4xl bg-white rounded dark:bg-gray-800 shadow-lg transform duration-200 easy-in-out m-12">
          <div className="h-1/4 sm:h-96 overflow-hidden">
            <img
              className="w-full rounded-t"
              src={chef_img}
              alt="Photo by aldi sigun on Unsplash"
            />
          </div>
          <div className="flex justify-start px-5 -mt-12 mb-5">
            <span clspanss="block relative h-48 w-48">
              <img
                alt={name}
                src={chef_img}
                className="mx-auto object-cover rounded-full h-24 w-24 bg-white p-1"
              />
            </span>
          </div>
          <div className="">
            <div className="px-7 mb-8">
              <h2 className="text-3xl font-bold text-green-900 dark:text-gray-300">
                {name}
              </h2>
              <div className="py-2 text-green-800 font-semibold">
                <p>Experience : {years_of_exp}</p>
                <p>Number of Recipes : {num_of_recipes}</p>
              </div>

              <p className="mt-2 text-gray-600 dark:text-gray-300">{bio}</p>

              <div className="flex justify-between py-5">
                <div className="flex gap-3 items-center">
                  <Rating style={{ maxWidth: 85 }} value={ratings} readOnly />
                  <p className="font-semibold text-green-900">{ratings}</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaHeart className="text-pink-600 cursor-pointer"></FaHeart>
                  <p className="font-semibold text-green-900">{likes}</p>
                </div>
              </div>

              <div>
                <label
                  htmlFor="my-modal-5"
                  className="btn btn-outline btn-accent"
                >
                  See Top Recipe
                </label>
                <input
                  type="checkbox"
                  id="my-modal-5"
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className="modal-box max-w-5xl">
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
                      className="mySwiper my-5"
                    >
                      <SwiperSlide
                        className="drop-shadow-2xl bg-zinc-50"
                        style={{ height: "40rem" }}
                      >
                        <img src={recipes_img?.dish_1_img} />
                        <div className="p-2">
                          <p className="text-xl font-bold text-green-900">
                            {recipes_name?.dish_1_name}
                          </p>
                          <p>
                            <span className="font-semibold text-green-900">
                              Ingredients :
                            </span>{" "}
                            {ingredients?.dish_1_ingredients}
                          </p>
                          <p>
                            <span className="font-semibold text-green-900">
                              Cooking Method :
                            </span>{" "}
                            {cooking_method?.dis_1_method}
                          </p>
                        </div>
                        <div className="flex justify-between py-5 px-2">
                          <div className="flex gap-3 items-center">
                            <Rating
                              style={{ maxWidth: 85 }}
                              value={ratings}
                              readOnly
                            />
                            <p className="font-semibold text-green-900">
                              {ratings}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaRegHeart
                              onClick={handleLike}
                              className="text-pink-600 cursor-pointer"
                            ></FaRegHeart>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="drop-shadow-2xl bg-zinc-50"
                        style={{ height: "40rem" }}
                      >
                        <img src={recipes_img?.dish_2_img} />
                        <div className="p-2">
                          <p className="text-xl font-bold text-green-900">
                            {recipes_name?.dish_2_name}
                          </p>
                          <p>
                            <span className="font-semibold text-green-900">
                              Ingredients :
                            </span>{" "}
                            {ingredients?.dish_2_ingredients}
                          </p>
                          <p>
                            <span className="font-semibold text-green-900">
                              Cooking Method :
                            </span>{" "}
                            {cooking_method?.dis_2_method}
                          </p>
                        </div>
                        <div className="flex justify-between py-5 px-2">
                          <div className="flex gap-3 items-center">
                            <Rating
                              style={{ maxWidth: 85 }}
                              value={ratings}
                              readOnly
                            />
                            <p className="font-semibold text-green-900">
                              {ratings}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaRegHeart
                              onClick={handleLike}
                              className="text-pink-600 cursor-pointer"
                            ></FaRegHeart>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide
                        className="drop-shadow-2xl bg-zinc-50"
                        style={{ height: "40rem" }}
                      >
                        <img src={recipes_img?.dish_3_img} />
                        <div className="p-2">
                          <p className="text-xl font-bold text-green-900">
                            {recipes_name?.dish_3_name}
                          </p>
                          <p>
                            <span className="font-semibold text-green-900">
                              Ingredients :
                            </span>{" "}
                            {ingredients?.dish_3_ingredients}
                          </p>
                          <p>
                            <span className="font-semibold text-green-900">
                              Cooking Method :
                            </span>{" "}
                            {cooking_method?.dis_3_method}
                          </p>
                        </div>
                        <div className="flex justify-between py-5 px-2">
                          <div className="flex gap-3 items-center">
                            <Rating
                              style={{ maxWidth: 85 }}
                              value={ratings}
                              readOnly
                            />
                            <p className="font-semibold text-green-900">
                              {ratings}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaRegHeart
                              onClick={handleLike}
                              className="text-pink-600 cursor-pointer"
                            ></FaRegHeart>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                    <div className="modal-action">
                      <label
                        htmlFor="my-modal-5"
                        className="btn btn-sm btn-outline btn-success btn-circle absolute  right-1 top-12"
                      >
                        ✕
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default ChefDetails;
