import React from "react";
import { Link, NavLink } from "react-router-dom";
import defaultUser from "../../assets/user.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
        <div className="navbar-start">

        </div>
      <div className="navbar-center">
        <ul className="flex gap-5 text-base font-normal text-[#706F6F]">
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink>About</NavLink>
          </li>
          <li>
            <NavLink>Career</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <img className="h-10 w-10 rounded-full" src={defaultUser} alt="" />
         <Link to='/login'><button className="btn bg-black text-white px-10 rounded-md">Login</button></Link>
      </div>
    </div>
  );
};

export default Navbar;

