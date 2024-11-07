import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import defaultUser from "../../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: `log out successful.`,
          showClass: {
            popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
          },
          hideClass: {
            popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
          },
        });
      })
      .catch((error) => {});
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start"></div>
      <div className="navbar-center">
        <ul className="flex gap-5 text-base font-normal text-[#706F6F]">
          <li>
            <NavLink to="/">Home</NavLink>
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
        {user ? (
          <div className="">
             
            <p>{user.displayName}</p>
            <button
              onClick={handleLogOut}
              className="btn bg-black text-white px-10 
          rounded-md"
            >
              Log Out
            </button>
            </div>
         
        ) : (
          <div className="flex items-center gap-2">
            <img className="h-10 w-10 rounded-full" src={defaultUser} alt="" />
            <Link to="/login">
              <button
                className="btn bg-black text-white px-10 
          rounded-md"
              >
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
