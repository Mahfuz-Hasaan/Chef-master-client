import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About/About";
import Home from "../pages/Home/Home/Home";
import ChefDetails from "../pages/ChefDetails/ChefDetails";

const router = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout></MainLayout>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : 'about',
                element : <About></About>
            },
            {
                path : ':id',
                element : <ChefDetails></ChefDetails>,
                loader : ({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
            }
        ]
    }
]);

export default router;