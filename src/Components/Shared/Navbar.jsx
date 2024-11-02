import React from "react";
import { NavLink } from "react-router-dom";
import defaultUser from '../../assets/user.png'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div></div>
      <div className="">
         <ul className="flex gap-5">
            <li><NavLink>Home</NavLink></li>
            <li><NavLink>About</NavLink></li>
            <li><NavLink>Career</NavLink></li>
         </ul>
      </div>
      <div className="flex items-center gap-3">
         <img className="h-10 w-10 rounded-full" src={defaultUser} alt="" />
         <button className="btn bg-black text-white px-10 rounded-md">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
