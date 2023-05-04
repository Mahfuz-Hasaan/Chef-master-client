import { FaUserCircle } from "react-icons/fa";
<link
  href="https://fonts.googleapis.com/css2?family=EB+Garamond&family=Lato&family=Vina+Sans&display=swap"
  rel="stylesheet"
></link>;
import logo from "../../assets/slider/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
const NavigationBar = () => {

  const {user,logOut} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout =  () =>{
    logOut()
    .then()
    navigate('/')
    .catch(error => console.log(error));
  }
  return (
    <div className="">
      <div className=" ">
        <div className="navbar h-24">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </div>

            <Link to="/" className="btn btn-ghost normal-case text-xl">
              <img className="w-14" src={logo} alt="" />
              CHEF MASTER
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li className="font-semibold hover:text-blue-800">
                <Link to="/">Home</Link>
              </li>
              <li className="font-semibold hover:text-blue-800">
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          {
            user ? <div className="navbar-end pr-5 font-semibold"><button onClick={handleLogout}>Logout</button>
            <p></p>
            </div> :
            <div className="navbar-end pr-5">
            <Link className="font-semibold" to="/login">Login</Link>
           
          </div>
          }
        </div>
      </div>  
    </div>
  );
};

export default NavigationBar;
