import React, { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Registration = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const { createUser } = useContext(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(name, photo, password, email);
    setError("");
    event.target.reset();

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toast.success("Successfully signed in", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        form.reset();
      })
      .catch((error) => {
        setError("password should be at least six characters");
      });
  };

  return (
    <div className="h-screen pt-20">
      <div className="">
        <form
          onSubmit={handleRegister}
          className="p-6 w-3/12 mx-auto border-2 rounded-md bg-white drop-shadow-md"
        >
          <div className="flex flex-col mb-4 drop-shadow-md ">
            <label className="text-gray-700 font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="border rounded-lg py-2 px-3 text-gray-700"
              type="text"
              id="name"
              name="name"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="flex flex-col mb-4 drop-shadow-md">
            <label className="text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="border rounded-lg py-2 px-3 text-gray-700"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="flex flex-col mb-4 drop-shadow-md">
            <label className="text-gray-700 font-bold mb-2" htmlFor="photo-url">
              Photo URL
            </label>
            <input
              className="border rounded-lg py-2 px-3 text-gray-700"
              type="text"
              id="photo-url"
              name="photo"
              placeholder="Enter the URL of your photo"
              required
            />
          </div>

          <div className="flex flex-col mb-4 drop-shadow-md">
            <label className="text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="border rounded-lg py-2 px-3 text-gray-700"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <p className="error pb-5 text-red-500">{error}</p>

          <div className="mb-4 w-fit  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <button type="submit">Register</button>
          </div>
          <Link className="underline text-blue-700" to="/login">
            Already have an account?
          </Link>
        </form>
      </div>
      <ToastContainer></ToastContainer>

    </div>
  );
};

export default Registration;
