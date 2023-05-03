import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";
import CoverImg from "../CoverImg/CoverImg";
import "swiper/css";
import "swiper/css/effect-cards";

import { FaRegHeart, FaRegStar } from "react-icons/fa";

import { EffectCoverflow, Pagination } from "swiper";
import { Link } from "react-router-dom";

const Home = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/chef")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <CoverImg></CoverImg>
      <div className="pb-8" style={{ height: "28rem" }}>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 80,
            stretch: 0,
            depth: 120,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {chefs.map((chef) => (
            <SwiperSlide
              className="rounded-lg cursor-pointer bg-indigo-50"
              style={{ height: "25rem" }}
              key={chef._id}
            >
              <img
                className=" border-2"
                src={chef.chef_img}
                alt={chef.name}
              />
              <div className="px-6  rounded-lg border-2 pt-2">
                <p className="text-center py-2 text-3xl font-bold">
                  {chef.name}
                </p>
                <hr className="text-3xl" /> <br />
                <p className="font-semibold">Experience : {chef.years_of_exp}</p>
                <p className="font-semibold">Number of recipes : {chef.num_of_recipes}</p>
                <div className="flex justify-between py-2">
                  <FaRegStar></FaRegStar>
                  <FaRegHeart></FaRegHeart>
                </div>
                <Link>
                  <div className="card-actions py-2">
                    <div className="badge badge-outline">View more recipe</div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
