import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Dhasboard from "../pages/Dhasboard";
import OurMenu from "../pages/OurMenu";
import Order from "../pages/Order";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Private from "./Private";
import Dhasbord from "../layouts/Dhasbord";
import Cart from "../dashboard/Cart";

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
                element:<Private><Dhasboard></Dhasboard></Private>
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
            },
            {
                path:'signup',
                element:<SignUp></SignUp>
            }

        ]
        
        
    },
    // dashboard style here
    {
        path:"dashboard",
        element:<Dhasbord></Dhasbord>,
        children:[
            {
                path:"/dashboard/cart",
                element:<Cart></Cart>
            }
        ]
    }
])
export default router