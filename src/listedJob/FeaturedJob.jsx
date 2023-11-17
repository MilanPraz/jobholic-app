import microsoftImg from "../assets/microsoft.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import { BsHourglassSplit } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const url = "https://jobholic.onrender.com/";
function FeaturedJob({ job }) {
  const userDetail = useSelector((state) => state.user.value);
  const { tags } = job;

  // console.log(job);
  return (
    <div className="  relative mt-2 group flex py-4 px-4 bg-gray-200 cursor-pointer hover:shadow-lg">
      <img
        className="w-14 h-14 sm:w-20 sm:h-20 self-center rounded-md"
        src={url + job.creatorPic}
        alt="mic"
      />
      <div className="flex flex-col pl-2 gap-1">
        <p className=" text-md md:text-lg font-mono font-bold">{job.title}</p>
        <div className=" flex items-center gap-4">
          <h2 className=" font-semibold text-[13px] sm:text-lg  text-green-800">
            Priority : {job.job_level}
          </h2>
          <div className="flex flex-wrap gap-0.5">
            {tags?.map((data) => {
              return (
                <div
                  className=" mt-1 bg-orange-400 px-1 sm:px-2 sm:py-0.5 text-[10px] font-thin rounded-lg text-gray-200"
                  key={data}
                >
                  <span>{data}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex gap-2">
          <BsHourglassSplit className="  text-orange-700" />
          <span className="text-sm font-thin  ">{job.job_type}</span>
          <FaUserTie className=" text-green-700 ml-2" />
          <span className="text-sm font-thin  ">{job.experience}-year Exp</span>
        </div>
        <Link
          to={`/job/${job._id}`}
          className=" hidden group-hover:inline-block right-4 bottom-2 py-1 px-2 text-sm font-thin absolute  text-white bg-orange-700 rounded-md"
        >
          Read more
        </Link>
        {userDetail?.role === "company" ? (
          <div className="flex gap-2 absolute top-2 right-2">
            <RiDeleteBin5Line
              onClick={() => {
                if (job._id !== userDetail._id) {
                  navigate("/prohibited");
                } else {
                  handleDelete(job._id);
                }
              }}
              className=" hidden group-hover:inline-block  text-xl   text-orange-700 "
            />
            {/* Delete */}
            {/* </button> */}
            <Link
              to={`/job/edit/${job._id}`}
              className=" hidden group-hover:inline-block    text-white"
            >
              <AiOutlineEdit className=" text-xl text-orange-700" />
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default FeaturedJob;
