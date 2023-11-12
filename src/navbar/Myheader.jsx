import { AiOutlineBarChart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/jobholicLogo.png";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { logoutUser } from "../../redux/UserSlice";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";
// import { toast, Toaster } from "react-hot-toast";

import ProtectedComponent from "../../protectedRoute/ProtectedComponent";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

function Myheader() {
  const [open, setOpen] = useState(false); //for hamburger icon

  const userDetail = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const path = location.pathname;

  function handleHamburger() {
    setOpen((prev) => !prev);
    console.log(open);
  }
  console.log(open);

  // console.log(userDetail);
  // console.log(userDetail?.image);
  function handleLogout() {
    toast.error("logout Successfully!!!");
    navigate("/");
    dispatch(logoutUser());
  }
  return (
    <div className=" container mx-auto py-2">
      <ToastContainer />
      {/* <Toaster /> */}
      <nav className="  ">
        <div className="  flex justify-between items-center ">
          <div className="flex gap-1 items-center ">
            <img className="w-8 rounded-full h-8 mr-2" src={logo} alt="logo" />
            <Link to="/" className=" text-xl font-bold text-orange-500">
              Jobholic
            </Link>
          </div>
          <div className=" flex  mx-4 ">
            <div className=" hidden md:block pt-1 ">
              <ul className="flex gap-4 justify-between font-mono text-orange-500">
                {userDetail?.username && (
                  <>
                    <img
                      className="w-8 h-8 rounded-full"
                      src={`https://jobholic.onrender.com/` + userDetail.image}
                    />
                    <span className="  pr-4 font-bold">
                      Hello,{userDetail.username}
                    </span>
                  </>
                )}
                <li className="transition ease-in-out delay-150 bg-green-700 hover:-translate-y-1 hover:scale-125 hover:text-gray-200 duration-300">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className=" transition ease-in-out delay-150 bg-green-700 hover:-translate-y-1 hover:scale-125 hover:text-gray-200 duration-300 ">
                  <NavLink to="/job">Jobs</NavLink>
                </li>
                {userDetail && (
                  <li className=" transition ease-in-out delay-150 bg-green-700 hover:-translate-y-1 hover:scale-125 hover:text-gray-200 duration-300 ">
                    <NavLink to="/chart">
                      Charts
                      <AiOutlineBarChart className="inline" />
                    </NavLink>
                  </li>
                )}
                <ProtectedComponent role={"company"}>
                  <li className=" transition ease-in-out delay-150 bg-green-700 hover:-translate-y-1 hover:scale-125 hover:text-gray-200 duration-300 ">
                    <NavLink to="/job/create">Create a Job</NavLink>
                  </li>
                </ProtectedComponent>
                {userDetail ? (
                  <span
                    className="  text-gray-100 bg-orange-400 px-1 py-1 rounded-md cursor-pointer"
                    onClick={() => handleLogout()}
                  >
                    log out
                  </span>
                ) : (
                  <Link
                    to={"/login"}
                    className=" text-gray-100 bg-orange-400 px-1 rounded-md cursor-pointer"
                  >
                    login
                  </Link>
                )}
              </ul>
            </div>

            {/* mobile menu */}
            {open ? (
              <div className="md:hidden bg-gray-800  w-1/2   backdrop-blur-md bg-opacity-40 h-full pt-9  z-50 top-0 right-0  fixed">
                <div onClick={handleHamburger} className=" z-30  pt-1  px-2 ">
                  <ul className="flex flex-col gap-4    font-mono text-orange-400">
                    {userDetail?.username && (
                      <>
                        <div className="flex items-center  gap-2">
                          <img
                            alt="pp"
                            className="w-6 h-6 rounded-full"
                            src={
                              `https://jobholic.onrender.com/` +
                              userDetail.image
                            }
                          />
                          <span className="  pr-4 font-thin text-sm">
                            Hello,{userDetail.username}
                          </span>
                        </div>
                        <hr className=" bg-green-600 my-3" />
                      </>
                    )}
                    <li className="md:text-orange-400">
                      <NavLink to="/">Home</NavLink>
                    </li>
                    {/* transition-all duration-500 hover:bg-orange-400 hover:px-2  hover:rounded-lg */}
                    <li>
                      <NavLink to="/job">Jobs</NavLink>
                    </li>
                    <li>
                      <NavLink to="/chart">
                        Charts
                        <AiOutlineBarChart className="inline" />
                      </NavLink>
                    </li>
                    <ProtectedComponent role={"company"}>
                      <li className=" transition-all duration-500  border-none">
                        <NavLink
                          className={`${
                            path === "/job/create" && "text-orange-400"
                          }
                        font-bold   `}
                          to="/job/create"
                        >
                          Create a Job
                        </NavLink>
                      </li>
                    </ProtectedComponent>
                    {userDetail ? (
                      <span
                        className="   text-gray-200 bg-orange-400 px-1 text-center rounded-md cursor-pointer"
                        onClick={() => handleLogout()}
                      >
                        log out
                      </span>
                    ) : (
                      <Link
                        to={"/login"}
                        className=" text-center text-gray-200 bg-orange-400 px-1 rounded-md cursor-pointer"
                      >
                        login
                      </Link>
                    )}
                  </ul>
                </div>
              </div>
            ) : null}
            {/* hamburger button */}
            <div className="   z-50     top-0 right-4 flex md:hidden">
              <button
                onClick={() => handleHamburger()}
                className=" flex items-center justify-center p-2 text-xl cursor-pointer text-orange-400 outline-none border-none"
              >
                {open == true ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Myheader;
// 06511120262565000001;
