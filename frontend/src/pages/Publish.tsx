import { ChangeEvent, useState } from "react"
import { AppBar } from "../components/AppBar"
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Publish=()=>{
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const navigate=useNavigate();
  return <div>
    
  <AppBar/>
<div className="flex justify-center w-full">
<div className="max-w-screen-lg w-full">
<input type="email" id="helper-text" aria-describedby="helper-text-explanation" className=" focus:outline-none mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="Title"onChange={(e)=>{
    setTitle(e.target.value);
}}/>
<TextArea onChange={(e)=>{
    setDescription(e.target.value);
}}/>
<button type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800 " onClick={async()=>{
    const response=await axios.post(`${BACKEND_URL}/api/v1/blog`,{
        title,
        content:description
    },{
        headers:{
            Authorization:localStorage.getItem("token")
        }
    })
    navigate(`/blog/${response.data.id}`)
}}>
                Publish post
            </button>
</div>

</div>


  </div>

}
function TextArea({onChange}:{onChange:(e:ChangeEvent<HTMLTextAreaElement>)=>void}){
  

return <div>
 <form>
            <div className="w-full mb-4 border border-gray-200 rounded-lg ">
                <div className="flex items-center justify-between   ">
                    <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                           
                            {/* Add other buttons here */}
                        </div>
                    </div>
                   
                    <div id="tooltip-fullscreen" role="tooltip" className="absolute z-10 invisible inline-block  text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip ">
                        Show full screen
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </div>
                <div className=" bg-white rounded-b-lg ">
                    <label htmlFor="editor" className="sr-only">Publish post</label>
                    <textarea id="editor" rows={8} className=" focus:outline-none block w-full pl-2 text-sm text-gray-800 bg-white border-0  " placeholder="Write an article..." onChange={onChange} required ></textarea>
                </div>
            </div>
            
        </form>
</div>



}
