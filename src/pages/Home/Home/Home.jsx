import React, { useEffect, useState } from "react";
import { FaRegHeart, FaRegStar, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import CoverImg from "../CoverImg/CoverImg";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

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
    </div>
  );
};

export default Home;
