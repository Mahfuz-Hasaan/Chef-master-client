import React, { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaBeer, FaGithub, FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";

const Login = () => {
  const auth = getAuth(app); 
  const provider = new GoogleAuthProvider();

  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || "/";

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
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError("Invalid email or password ");
      });
  };


  const handleGoogleSignIn = () =>{
    signInWithPopup(auth,provider)
    .then(result  => {
      const user = result.user;
      navigate(from, { replace: true })
    })
    .catch(error =>{
      console.log(error.message);
    })
  }

  return (
    <div>
      <div className="pt-20 h-screen">
        <div>
          <form
            className="p-6 w-3/12 mx-auto border-2 rounded-md bg-white drop-shadow-md"
            onSubmit={handleLogin}
          >
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
              <label
                className="text-gray-700 font-bold mb-2"
                htmlFor="password"
              >
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
            <p className="text-red-600">{error}</p>
            <div className="mb-4 w-fit  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <button type="submit">Login</button>
            </div>
            <Link
              className="underline flex justify-end text-blue-700"
              to="/registration"
            >
              Dont have account?
            </Link>
          </form>
        </div>

        <ToastContainer></ToastContainer>


        <div className="w-3/12 mx-auto py-10">
          <div className="flex items-center gap-2 text-lg border-2 justify-center cursor-pointer drop-shadow-lg bg-white rounded-md hover:text-blue-700 px-9" onClick={handleGoogleSignIn}>
            <FaGoogle></FaGoogle>
            <p className="font-bold">Login With Google</p>
          </div>
          <div className="flex items-center gap-2 text-lg border-2 drop-shadow-lg bg-white justify-center cursor-pointer rounded-md mt-2 px-9 hover:text-slate-600">
            <FaGithub></FaGithub>
            <p className="font-bold">Login With Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
