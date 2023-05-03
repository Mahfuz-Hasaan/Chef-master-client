import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About/About";
import Home from "../pages/Home/Home/Home";

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
            }
        ]
    }
]);

export default router;