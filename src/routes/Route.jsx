import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import ChefDetails from "../pages/ChefDetails/ChefDetails";
import ErrorPAge from "../pages/ErrorPage/ErrorPAge";
import Blog from "../pages/Blog/Blog";
import Login from "../shared/Login/Login";
import Registration from "../shared/Login/Registration/Registration";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: ":id",
        element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
        loader: ({ params }) =>
          fetch(
            `https://master-chef-server-mahfuzhasan584-gmailcom.vercel.app/chef/${params.id}`
          ),
      },
      {
        path: "*",
        element: <ErrorPAge></ErrorPAge>,
      },
    ],
  },
]);

export default router;
