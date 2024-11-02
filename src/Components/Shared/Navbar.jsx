import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 flex">
      <div className="">
         <ul className="flex gap-5">
            <li><NavLink>Home</NavLink></li>
            <li><NavLink>About</NavLink></li>
            <li><NavLink>Career</NavLink></li>
         </ul>
      </div>
      <div className="">
         <img src="" alt="" />
         <button className="btn">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
