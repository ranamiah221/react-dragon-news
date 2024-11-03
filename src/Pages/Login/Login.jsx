import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar";
import { useContext, useState } from "react";
import { FaEye } from "react-icons/fa6";
import { IoMdEyeOff } from "react-icons/io";
import { AuthContext } from "../../Components/Provider/AuthProvider";


const Login = () => {
    const [isShow, setIsShow]=useState(false);
    const{signIn}=useContext(AuthContext);
    const navigate = useNavigate();
    const location=useLocation();
   
    const handleLogin=(e)=>{
        e.preventDefault();
        const form= new FormData(e.currentTarget)
        const email=form.get('email')
        const password=form.get('password')
        signIn(email, password)
        .then(result=>{
          console.log(result.user)
         
            navigate(location?.state ? location.state : '/')
          
        })
        .catch(error=>{
          console.log(error.message)
        })
}
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero bg-base-200 min-h-screen mt-10">
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
                <button type="submit"  className="btn bg-black text-white">Login</button>
              </div>
              <p className="text-center text-sm font-normal">Don't Have An Account ? <Link className="text-amber-400" to='/register'> Register </Link></p>
            </form>
           
          
        </div>
      </div>
    </div>
  );
};

export default Login;
