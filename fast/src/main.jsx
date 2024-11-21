import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css'
import {
  
  RouterProvider,
} from "react-router-dom";
import { router } from "./firebase/Routs/router";
import AthoProvadar from "./firebase/AthoProvadar/AthoProvadar";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AthoProvadar>
    <RouterProvider router={router} />
    </AthoProvadar>
  </React.StrictMode>
);
