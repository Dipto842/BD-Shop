import { Outlet } from "react-router-dom";
import Nav from "./Leout/shearpages/Navebar";



const Mani = () => {
    return (
        <div className="">

          <div className="mx-auto text-center">
          <Nav></Nav>
          </div>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Mani;