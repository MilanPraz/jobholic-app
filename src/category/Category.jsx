import cyber from "../assets/cyber.png";
import { Link } from "react-router-dom";

function Category({ Category }) {
  let cat = Category.toUpperCase();
  return (
    <Link
      to={`/job?category=${Category}`}
      className=" border-4 shadow-lg border-orange-700 rounded-full  w-28 h-28 sm:w-32 sm:h-32  md:w-36 md:h-36 flex flex-col items-center justify-center "
    >
      <img className=" w-10 md:w-16 mx-auto " src={cyber} alt="sda" />
      <p className=" text-center text-xs md:text-sm font-semibold text-green-700">
        {cat}
      </p>
    </Link>
  );
}

export default Category;
