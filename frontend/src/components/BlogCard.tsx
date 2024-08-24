import { Link } from "react-router-dom"


interface CardProps{
  authorName:string,
  title:string,
  content:string,
 
  id:number
}
export const BlogCard=({id,authorName,title,content}:CardProps)=>{

  return <Link to={`/blog/${id}`}>
    <div>
    <div className="border p-4 border-b border-slate-200 cursor-pointer">
    <div className="flex ">
     <div className="flex justify-center items-center">
     <Avatar name={authorName} size={10}/>
      <div className=" font-extralight pl-2 ">
      {authorName}
      </div>
      <div className="text-slate-500 font-semibold flex justify-center text-center pl-2 pr-3 pb-5 w-3 h-3 rounded-full">
      &#183;
      </div>
       <div>
       
       </div>
        
     </div>
    </div>
    <div className="text-xl font-semibold">
      {title}
      </div>
    <div className="text-slate-600 font-th ">
      {content.slice(0,100)+"...."}
      </div>
    <div className="text-slate-400 font-thin pt-2">
    {Math.ceil(content.length/100)+" minute read"}
    </div>
   
    </div>
  </div>
  </Link>
}
export function Avatar({name}:{name:string,size:number}){
  return <div>
    <div className={`relative inline-flex items-center justify-center w-10 h-10 overflow:hidden  bg-gray-100 rounded-full dark:bg-gray-600`}>
    <span className="text-xs  text-gray-600 dark:text-gray-300">{name[0]}</span>
</div>

  </div>
}