


import { FaGoogle } from "react-icons/fa";

import { useContext } from "react";
import {  useNavigate } from "react-router-dom";
import { Athcontes } from "../../firebase/AthoProvadar/AthoProvadar";
import Swal from "sweetalert2";


const Sosallogin = () => {
const neveget = useNavigate()
  const { Google } = useContext(Athcontes)
  const Gooolhendel = () => {
    Google()
      .then((res) => {
       
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
        neveget('/')

        const userinfo = {
          name: res.user?.displayName,
          email: res.user?.email
        }


      })
  }

  return (
    <div >


      < button onClick={Gooolhendel} className="btn bg-orange-400 lg:w-80 mx-auto text-center lg:ml-[326px] "><FaGoogle />Login   Gollle</button>


    </div>
  );
};


export default Sosallogin;