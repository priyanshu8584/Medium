
import { Blog } from "../hooks"
import { AppBar } from "./AppBar"
import { Avatar } from "./BlogCard"

import CurrentDate from "./CurrentDate"
export const FullBlog=({blog}:{blog:Blog})=>{
  
    
  
  return <div>
  <AppBar/>
    <div className="flex justify-center">
    <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-2xl pt-12 ">
       <div className=" col-span-8">
        <div className="text-3xl font-extrabold">
              {blog.title}
        </div>
        <div className="text-slate-500 pt-2">
              Post on <CurrentDate/>
        </div>
        <div className="pt-2">
          {blog.content}
        </div>
       </div>
       <div className="col-span-4 text-sm">
        Author
        <div>
        <Avatar size={2} name={blog.author.name||"Anonymous"}/>
        <div className="text-xl font-bold">
        {blog.author.name|| "Anonyomous "}
        </div>
        </div>
        <div className="flex w-full">
        <div >
       
        </div>
        
        
            <div className="pt-2 text-slate-500 ">
                    your account
            </div>
        </div>
       </div>

  </div>
  </div>

    </div>
    
   
}
// const CurrentDateTimeComponent = () => {
//   const [currentDateTime, setCurrentDateTime] = useState(new Date());

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentDateTime(new Date());
//     }, 1000); // Update every second

//     // Clear interval on component unmount
//     return () => clearInterval(intervalId);
//   }, []); // Run effect only once on component mount

//   const formatDate = ({date}:{date:number}) => {
//     return `${date.getFullYear()}-${(date.getMonth() + 1)
//       .toString()
//       .padStart(2, '0')}-${date
//       .getDate()
//       .toString()
//       .padStart(2, '0')}`;
//   };

//   const formatTime = (date) => {
//     return `${date
//       .getHours()
//       .toString()
//       .padStart(2, '0')}:${date
//       .getMinutes()
//       .toString()
//       .padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
//   };

//   return (
//     <div>
//       <p>Current Date: {formatDate(currentDateTime)}</p>
//       <p>Current Time: {formatTime(currentDateTime)}</p>
//     </div>
//   );
// };