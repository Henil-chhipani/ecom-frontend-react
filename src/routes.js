import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/singnup";
import PrivateRoute from "./utils/privateRoute";


function AppRoutes(){
    const router = createBrowserRouter([
        {
            path:"",
            element:(<PrivateRoute><Home/></PrivateRoute>),
        },
        {
            path:"/login",
            element:<Login/>,
        },
        {
            path:"/signup",
            element:<SignUp/>,
        },
    ]);
    return <RouterProvider router={router}/>
}

export default AppRoutes;