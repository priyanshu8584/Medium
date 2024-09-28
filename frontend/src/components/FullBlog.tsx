import { Blog } from "../hooks";
import { AppBar } from "./AppBar";
import { Avatar } from "./BlogCard";
import CurrentDate from "./CurrentDate";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <AppBar />
      <div className="flex justify-center py-8">
        <div className="grid grid-cols-12 px-4 md:px-10 w-full max-w-screen-2xl">
          <div className="col-span-8 bg-white rounded-lg shadow-md p-6">
            <h1 className="text-4xl font-extrabold text-gray-800">{blog.title}</h1>
            <div className="text-slate-500 pt-2">
              Post on <CurrentDate />
            </div>
            <div className="pt-4 text-lg text-gray-700 leading-relaxed">
              {blog.content}
            </div>
          </div>
          <div className="col-span-4 text-sm p-4 bg-gray-50 rounded-lg shadow-md">
            <div className="font-semibold text-lg">Author</div>
            <div className="flex items-center mt-2">
              <Avatar size={2} name={blog.author.name || "Anonymous"} />
              <div className="ml-3">
                <div className="text-xl font-bold text-gray-800">
                  {blog.author.name || "Anonymous"}
                </div>
                <div className="pt-1 text-slate-500">Your account</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
