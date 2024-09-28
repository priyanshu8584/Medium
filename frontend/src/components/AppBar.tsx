import { Avatar } from "./BlogCard";
import { Link } from "react-router-dom";

export const AppBar = () => {
  return (
    <div className="border-b shadow-lg bg-white flex justify-between items-center px-5 md:px-10 py-4">
      <Link to={"/"} className="flex items-center cursor-pointer text-2xl font-bold text-gray-800">
        Medium
      </Link>
      <Link to={"/publish"}>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-4 py-2 transition-all duration-200"
        >
          New
        </button>
      </Link>
      <div className="flex items-center">
        <Avatar name="Priyanshu" size={10} />
      </div>
    </div>
  );
};
