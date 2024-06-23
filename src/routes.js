import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";

function AppRoutes(){
    const router = createBrowserRouter([
        {
            path:"",
            element:<Home/>,
        },
    ]);
    return <RouterProvider router={router}/>
}

export default AppRoutes;