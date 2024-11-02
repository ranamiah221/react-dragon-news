import { Link } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar";
import { useState } from "react";
import { FaEye } from "react-icons/fa6";
import { IoMdEyeOff } from "react-icons/io";

const Login = () => {
    const [isShow, setIsShow]=useState(false);
    const handleLogin=(e)=>{
        e.preventDefault();
}
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero bg-base-200 min-h-screen ">
       <div className="hero-content border-2 w-3/4 mx-auto bg-white">
            <form onSubmit={handleLogin} className="card-body">
                <h1 className="border-b-2 pb-8 text-center  text-xl font-bold">Login Your Account</h1>
              <div className="form-control mt-5">
                <label className="label">
                  <span className="label-text text-base font-medium">Email Address</span>
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
                  <span className="label-text text-base font-medium">Password</span>
                </label>
                <input
                  type={isShow ? 'text': 'password'}
                  name="password"
                  placeholder="password"
                  className="input input-bordered bg-[#F3F3F3]"
                  required
                />
                {

                }
                <span onClick={()=>setIsShow(!isShow)} className="absolute bottom-12 right-5">{isShow ? <IoMdEyeOff /> : <FaEye></FaEye>}</span>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-black text-white">Login</button>
              </div>
              <p className="text-center text-sm font-normal">Don't Have An Account ? <Link to='/register'><span className="text-amber-400">Register </span></Link></p>
            </form>
          
        </div>
      </div>
    </div>
  );
};

export default Login;