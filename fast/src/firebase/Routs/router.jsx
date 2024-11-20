import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Mani from "../../Mani";
import Home from "../../Componetn/Home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Mani></Mani>,
      children: [
       {
        path:'/',
        element:<Home></Home>
       }
  
  
      ]
    } ])