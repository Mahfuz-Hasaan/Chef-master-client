import React, { useEffect, useState } from "react";

import { FaRegHeart, FaRegStar } from "react-icons/fa";
import { EffectCoverflow, Pagination } from "swiper";
import { Link } from "react-router-dom";
import CoverImg from "../CoverImg/CoverImg";

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
      <div className="grid lg:grid-cols-3 lg:w-8/12 mx-auto gap-10 my-10 p-3">
        {chefs.map((chef) => (
          <div key={chef.id}>
            <div className="card lg:w-96 w-80 mx-auto bg-base-100 shadow-xl cursor-pointer hover:scale-105 transition duration-300">
              <figure>
                <img src={chef.chef_img} alt={chef.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{chef.name}</h2>
                <p>Experience : {chef.years_of_exp}</p>
                <p>Total Recipe : {chef.num_of_recipes}</p>
                <div className="flex items-center justify-between">
                  <FaRegHeart className="text-pink-600"></FaRegHeart>
                  <FaRegStar></FaRegStar>
                </div>
                <div className="card-actions justify-end">
                  <Link to={`/${chef.id}`}>
                    <button className="badge badge-outline">
                      View More Recipe
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
