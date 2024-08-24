
import { BlogCard } from '../components/BlogCard'
import { AppBar } from '../components/AppBar'
import { useBlogs } from '../hooks'
import { BlogSkeleton } from '../components/BlogSkeleton'


export const Blogs = () => {
  const {loading,blogs}=useBlogs();
  if(loading)
    {
      return <div  >
      <AppBar/>
      <div >
      
      <div className="flex justify-center">
      <div  className="">
          
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
      
  </div>
      </div>
      </div>
  </div>
    }
  return <div>
    <AppBar/>
  <div className="flex justify-center text-sm">
        
      <div className=" max-w-xl">
      {blogs.map(blog=><BlogCard 
      id={blog.id}
      authorName={blog.author.name||"Anonyomous"} 
      title={blog.title}
       content={blog.content}
      />)}
    
      
     
      
      
      </div>
    </div>
    </div>
  
}
