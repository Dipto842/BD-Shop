import { useContext } from "react";

import { useForm } from "react-hook-form"


import { Link, useNavigate } from "react-router-dom";


import Sosallogin from "./Sosallogin/Sosallogin";
import { Athcontes } from "../firebase/AthoProvadar/AthoProvadar";
import Swal from "sweetalert2";





const Logen = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm()
  const neveget = useNavigate()
  const { singin } = useContext(Athcontes)

  const onSubmit = (data) => {
    console.log(data)
    singin(data.email, data.password)
      .then(res => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your login success ",
          showConfirmButton: false,
          timer: 1500
        });
      neveget('/')
        
      })

      .catch(error => {
        console.log(error), alert('not ok')
      })
  }


  return (
    <div>
      <div className=" lg:w-[1800px]  lg:flex  gap-7 lg:ml-[450px]    mb-14 mt-32">
        <div className=" lg:w-[1000px] bg-white shadow-2xl border rounded-lg ">
          <div>
            <h1 className="text-2xl lg:w-96 font-bold leading-[135%] mx-auto mt-2 mb-9 text-center ">
              Welcome to
              <span className="text-[#6358dc]">BD_Shop </span>
            </h1>

           <Sosallogin></Sosallogin>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className=" lg:w-96 mx-auto mt-12">
            {/* register your input into the hook by invoking the "register" function */}
            <div>
              <h1 className="text-[20px] font-bold "> Email</h1>
              <input className="w-full mb-7 input bg-[#ECECEC] text-black rounded-lg font-bold" type="text" placeholder="inter your Email" {...register("email")} />
            </div>

            {/* include validation with required or other standard HTML validation rules */}
            <h1 className="text-[20px] font-bold ">password</h1>
            <input className="w-full bg-[#ECECEC] input text-black rounded-lg font-bold" type="password" placeholder="inter your password" {...register("password", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <div className="w-[220px] mx-auto mt-6">
              <button className="mx-auto bg-[#6358dc] mb-6 h-11 rounded-lg font-bold text-white text-2xl  lg:w-full">Logen</button>
            </div>
          </form>
          <div className="text-center">
            Don’t have an account? <Link to={'/rejestar'}>Register</Link>
          </div>
        </div>

        <div >
          <img className="w-[800px]" src='' alt="" />
        </div>
      </div>

    </div>
  );
};

export default Logen;