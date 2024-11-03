import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar";
import { IoMdEyeOff } from "react-icons/io";
import { FaEye } from "react-icons/fa6";
import { AuthContext } from "../../Components/Provider/AuthProvider";

const Register = () => {
  const [isShow, setIsShow] = useState(false);
  const {createUser}=useContext(AuthContext);
 
  const handleRegister = (e) => {
    e.preventDefault();
    const form= new FormData(e.currentTarget)
    const email= form.get('email')
    const password= form.get('password')
    createUser(email, password)
    .then(result=>{
      console.log(result.user)
    })
    .catch(error=>{
      console.log(error.message)
    })
    
    
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
            {/* terms and condition */}
           <div className="flex items-center gap-2">
           <input type="checkbox"  className="checkbox" />
           <p>Accept terms and condition</p>
           </div>
            <div className="form-control mt-6">
              <button type="submit"  className="btn bg-black text-white">Register</button>
            </div>
            <p className="text-center text-sm font-normal">
              Already Have An Account ?
              <Link className="text-amber-400" to="/login">
                 Login 
              </Link>
            </p>
          </form>
         
        </div>
      </div>
    </div>
  );
};

export default Register;
