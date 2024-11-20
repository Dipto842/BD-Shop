import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Mani from "../../Mani";
import Home from "../../Componetn/Home/Home";
import Logen from "../../LogenInfho/Login";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Mani></Mani>,
      children: [
       {
        path:'/',
        element:<Home></Home>
       },
       {
        path:'/login',
        element:<Logen></Logen>
       }
  
  
      ]
    } ])