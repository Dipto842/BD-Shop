import { Outlet } from "react-router-dom";
import Nav from "./Leout/shearpages/Navebar";
import Footer from "./Leout/shearpages/fouter/Fouter";



const Mani = () => {
    return (
        <div >

          <div className="mx-auto text-center">
          <Nav></Nav>
          </div>
           <div className="min-h-screen">
           <Outlet></Outlet>
           </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Mani;