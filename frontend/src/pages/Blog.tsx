import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";
import { FullBlog } from "../components/FullBlog";
import { Spinner } from "../components/Spinner";
export const Blog = () => {
  const {id}=useParams();
  const {loading,blog}=useBlog({
    id:id|| ""
  });
  if(loading)
    return <div className="h-screen flex flex-col justify-center">
    <div className="flex justify-center">
    <Spinner/>
    </div>
    </div>
  return (
    <div>
      {blog ? <FullBlog blog={blog}/> : <div>Loading</div>}
    </div>
  )
}
