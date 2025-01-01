import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Dhasboard from "../pages/Dhasboard";
import OurMenu from "../pages/OurMenu";
import Order from "../pages/Order";
import Login from "../pages/Login";

const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts></MainLayouts>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/dashboard',
                element:<Dhasboard></Dhasboard>
            },
            {
                path:'/menu',
                element:<OurMenu></OurMenu>
            },
            {
                path:'order/:category',
                element:<Order></Order>
            },
            {
                path:'login',
                element:<Login></Login>
            }

        ]
        
        
    }
])
export default router