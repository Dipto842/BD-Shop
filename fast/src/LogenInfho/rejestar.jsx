import { useContext } from "react";

import { useForm } from "react-hook-form";

import { Athcontes } from "../firebase/AthoProvadar/AthoProvadar";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Sign = () => {
  const neveget = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const validatePassword = (value) => {
    const passwordRegex = {
      length: /.{8,}/, // At least 8 characters
      lowerCase: /[a-z]/, // At least one lowercase letter
      upperCase: /[A-Z]/, // At least one uppercase letter
      number: /[0-9]/, // At least one number
      specialChar: /[@!#$%^&*(),.?":{}|<>]/, // At least one special character
    };

    if (!passwordRegex.length.test(value)) {
      return "Password must be at least 8 characters long.";
    }
    if (!passwordRegex.lowerCase.test(value)) {
      return "Password must contain at least one lowercase letter.";
    }
    if (!passwordRegex.upperCase.test(value)) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!passwordRegex.number.test(value)) {
      return "Password must contain at least one number.";
    }
    if (!passwordRegex.specialChar.test(value)) {
      return "Password must contain at least one special character.";
    }

    return true; // Valid password
  };

  const { singup, user, updateProfil } = useContext(Athcontes);
  const onSubmit = (data) => {
    singup(data.email, data.password, data.name).then((re) => {
      console.log(re.user);
      updateProfil(data.name)
        .then(() => {
          const userInpho = {
            name: data.name,
            email: data.email,
          };
          Swal.fire({
            position: "center",
            icon: "success",
            title: "your register success",
            showConfirmButton: false,
            timer: 1500,
          });
          neveget("/");
        })
        .catch((e) => {
          console.log(e);
        });
    });

    console.log(data);
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">sing up now!</h1>
          </div>
          <div className="card w-[500px] shrink-0  shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name")}
                  placeholder="Inter your name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email")}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    validate: validatePassword,
                  })}
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />

                {errors.password && <p>{errors.password.message}</p>}

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <select className="select select-bordered w-full mb-2 mt-4 "  >
                  <option disabled selected>
                  users  types 
                  </option>
                  <option>Buyer</option>
                  <option>Seller</option>
                </select>
              </div>

              <input
                type="submit"
                className="btn btn-primary"
                value={"SingUp"}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
