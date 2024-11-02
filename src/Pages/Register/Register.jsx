import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar";
import { IoMdEyeOff } from "react-icons/io";
import { FaEye } from "react-icons/fa6";

const Register = () => {
  const [isShow, setIsShow] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
  };
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content border-2 w-2/4 mx-auto bg-white">
          <form onSubmit={handleRegister} className="card-body">
            <h1 className="border-b-2 pb-8 text-center  text-xl font-bold">
              Register Your Account
            </h1>
            <div className="form-control mt-5">
              <label className="label">
                <span className="label-text text-base font-medium">
                  User Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your User Name"
                className="input input-bordered bg-[#F3F3F3]"
                required
              />
            </div>
            <div className="form-control mt-5">
              <label className="label">
                <span className="label-text text-base font-medium">
                  Photo Url
                </span>
              </label>
              <input
                type="text"
                name="photo_url"
                placeholder="Enter Your Photo Url"
                className="input input-bordered bg-[#F3F3F3]"
                required
              />
            </div>
            <div className="form-control mt-5">
              <label className="label">
                <span className="label-text text-base font-medium">
                  Email Address
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email Address"
                className="input input-bordered bg-[#F3F3F3]"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text text-base font-medium">
                  Password
                </span>
              </label>
              <input
                type={isShow ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered bg-[#F3F3F3]"
                required
              />
             
              <span
                onClick={() => setIsShow(!isShow)}
                className="absolute bottom-3 right-3"
              >
                {isShow ? <IoMdEyeOff /> : <FaEye></FaEye>}
              </span>
              
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-black text-white">Register</button>
            </div>
            <p className="text-center text-sm font-normal">
              Already Have An Account ?
              <Link to="/login">
                <span className="text-amber-400"> Login </span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
