import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About/About";
import Home from "../pages/Home/Home/Home";
import ChefDetails from "../pages/ChefDetails/ChefDetails";
import ErroLayout from "../layouts/ErroLayout";
import ErrorPAge from "../pages/ErrorPage/ErrorPAge";

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
        path: "about",
        element: <About></About>,
      },
      {
        path: ":id",
        element: <ChefDetails></ChefDetails>,
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
