import { Link } from "react-router-dom";

interface CardProps {
  authorName: string;
  title: string;
  content: string;
  id: number;
}

export const BlogCard = ({ id, authorName, title, content }: CardProps) => {
  return (
    <Link to={`/blog/${id}`} className="block">
      <div className="max-w-sm mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg rounded-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105">
        <div className="flex items-center p-4 border-b border-slate-200 bg-white">
          <Avatar name={authorName} size={10} />
          <div className="font-extralight pl-2 text-gray-800">{authorName}</div>
          <div className="text-slate-500 font-semibold flex justify-center text-center pl-2 pr-3 pb-5">
            &#183;
          </div>
        </div>
        <div className="p-4 bg-white">
          <div className="text-xl font-semibold mb-2 text-gray-900">{title}</div>
          <div className="text-slate-600 font-thin mb-4">
            {content.slice(0, 100) + "..."}
          </div>
          <div className="text-slate-400 font-thin">
            {Math.ceil(content.length / 100)} minute read
          </div>
        </div>
      </div>
    </Link>
  );
};

export function Avatar({ name }: { name: string; size: number }) {
  return (
    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-200 rounded-full">
      <span className="text-lg text-gray-600 dark:text-gray-300">{name[0]}</span>
    </div>
  );
}
