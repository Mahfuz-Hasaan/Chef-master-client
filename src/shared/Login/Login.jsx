import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    setError("");
    signIn(email, password)
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
      })
      .catch(error => {
        setError('Invalid email or password ');
      })
  };

  return (
    <div>
      <form
        onSubmit={handleLogin}
        className="p-6 w-6/12 mx-auto border-2 rounded-md"
      >
        <div className="flex flex-col mb-4">
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

        <div className="flex flex-col mb-4">
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

        <div className="mb-4 w-fit  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <input type="submit" value="Login" />
        </div>
        <p className="text-red-600">{error}</p>
        <Link className="underline" to="/registration">
          Dont have account?
        </Link>
      </form>
      
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
