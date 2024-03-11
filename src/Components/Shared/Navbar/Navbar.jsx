import { IoMdMenu } from "react-icons/io";
import { FaWindowClose } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo1.png";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const Clicked = () => {
    setOpen(!open);
  };

  return (
    <div>
      <nav
        className={`md:flex  ${
          open === true ? "h-60" : "h-16"
        } bg-slate-900  md:bg-opacity-0 flex-col md:flex-row justify-between   md:h-16 text-bg-white    bg-opacity-100 items-center ${
          open === true ? "h-60" : ""
        }`}
      >
        <div className="flex  flex-row justify-between items-center">
          <div className="   flex items-center float-start">
            <figure className=" w-60">
              <img src={logo} alt="" />
            </figure>
          </div>
          <div className="float-right p-2 md:hidden " onClick={Clicked}>
            {open === true ? (
              <FaWindowClose className=" text-4xl text-pink-400 cursor-pointer " />
            ) : (
              <IoMdMenu className="text-4xl text-pink-400 cursor-pointer " />
            )}
          </div>
        </div>
        <div
          className={`w-36 md:w-auto mr-5 pb-2 justify-center  text-white  flex flex-col md:flex-row md:transparent rounded  bg-opacity-80 md:bg-opacity-0 absolute md:static ${
            open === true ? "top-4 left-[40%]" : "-top-96"
          } `}
        >
          <div className="flex flex-col mt-10 sm:mt-0  md:items-center text-slate-500 md:flex-row ">
            <li className="list-none mt-2  text-lg md:mx-3  font-bold">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active text-pink-500 "
                    : isPending
                    ? "pending"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="list-none mt-2 text-lg md:mx-3 w-32 font-bold">
              <NavLink
                to="/addproduct"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active text-pink-500 "
                    : isPending
                    ? "pending"
                    : ""
                }
              >
                Add Product
              </NavLink>
            </li>
            <li className="list-none mt-2 text-lg md:mx-3 font-bold">
              <NavLink
                to="/cart"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active text-pink-500 "
                    : isPending
                    ? "pending"
                    : ""
                }
              >
                Cart
              </NavLink>
            </li>
          </div>
          <Link to="" className=" justify-items-start md:mx-3 mt-4 ">
            <button className="btn btn-info bg-pink-600 border-none text-xl font-bold  text-slate-200">
              Log In
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
