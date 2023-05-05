import React, { useEffect, useState } from "react";
import { FaRegHeart, FaRegStar, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import CoverImg from "../CoverImg/CoverImg";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Marquee from "react-fast-marquee";

import mention_1 from '../../../assets/slider/mentions-1.jpg'
import mention_2 from '../../../assets/slider/mention-2.jpg'
import mention_3 from '../../../assets/slider/mention-3.jpg'


const Home = () => {
  const [loading, setLoading] = useState(true);
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("https://master-chef-server-mahfuzhasan584-gmailcom.vercel.app/chef")
      .then((res) => res.json())
      .then((data) => {
        setChefs(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <CoverImg></CoverImg>
      <div className="p-2 bg-danger flex items-center bg-yellow-100">
        <button className="bg-yellow-300 py-2 px-5 mr-2 rounded-lg font-semibold w-fit">
          About Master Chef
        </button>
        <Marquee pauseOnHover="boolean">
          Choose healthy. Be strong. Live long.We are providing the best
          AMERICAN FOOD. Here we are going to show you top 9 Chef in America and
          their top American dishes!!.Here are top food of the chef
          Cheeseburgers. ... Buffalo wings. ... Reubens. ... Pecan pie. ...
          Chocolate chip cookies. ... S'mores. ... Lobster roll. ... Corn dogs
        </Marquee>
      </div>
      {loading ? (
        <div>
          <div class="h-screen bg-white">
            <div class="flex justify-center items-center h-full">
              <img
                class="h-16 w-16"
                src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
                alt=""
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 lg:w-8/12 mx-auto gap-10 my-10 p-3">
          {chefs.map((chef) => (
            <div key={chef.id}>
              <div className="card lg:w-96 w-80 mx-auto bg-base-100 shadow-xl cursor-pointer hover:scale-105 transition duration-300">
                <figure>
                  <img src={chef.chef_img} alt={chef.name} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-2xl font-bold">{chef.name}</h2>
                  <p className="font-bold">Experience : {chef.years_of_exp}</p>
                  <p className="font-bold">
                    Total Recipe : {chef.num_of_recipes}
                  </p>
                  <div className="flex justify-between py-5">
                    <div className="flex gap-3 items-center">
                      <Rating
                        style={{ maxWidth: 85 }}
                        value={chef.ratings}
                        readOnly
                      />
                      <p className="font-semibold text-green-900">
                        {chef.ratings}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaHeart className="text-pink-600 cursor-pointer"></FaHeart>
                      <p className="font-semibold text-green-900">
                        {chef.likes}
                      </p>
                    </div>
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
      )}

      <div className="w-8/12 mx-auto mb-10">
        
        <div className="collapse w-fit mx-auto">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
          <p className="text-2xl w-fit mx-auto p-2 drop-shadow-lg rounded-lg font-bold py-3 text-center bg-yellow-300">
          Honerable Mentions(tap here)
        </p>
          </div>
          <div className="collapse-content flex lg:flex-row flex-col gap-2">
            <div className="flex items-center justify-around flex-col-reverse px-3 rounded-lg border-2 py-4 bg-yellow-100">
              <p className="text-2xl rounded-lg font-bold">Gabrielle Hamilton</p>
              <img className="w-48 rounded-full" src={mention_1} alt="" />
            </div>
            <div className="flex items-center rounded-lg flex-col-reverse px-3 justify-around border-2 py-4 bg-yellow-100">
              <p className="text-2xl  font-bold">Mario Batali</p>
              <img className="w-48 rounded-full" src={mention_2} alt="" />
            </div>
            <div className="flex items-center rounded-lg flex-col-reverse px-3 justify-around border-2 py-4 bg-yellow-100">
              <p className="text-2xl font-bold">Anthony Bourdain</p>
              <img className="w-48 rounded-full" src={mention_3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
