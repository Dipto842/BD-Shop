import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Mani from "../../Mani";
import Home from "../../Componetn/Home/Home";
import Logen from "../../LogenInfho/Login";
import Sign from "../../LogenInfho/rejestar";
import Products from "../../Leout/Products/Products";
import ProductsData from "../../Leout/Products/ProductsData/ProductsData";

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

    },

{
  
    path:'/Products',
    element:<Products></Products>,
    children:[
      {
        path:'/Products',
        element:<ProductsData></ProductsData>
      }
    ]
},









  {
    
      path:'/login',
      element:<Logen></Logen>
     
  },
  {
    path:'/rejestar',
    element:<Sign></Sign>
  }
  
  ])