
import { SignupInput } from "@priyanshu7/medium"
import { ChangeEvent, useState } from "react"
import { Link,useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../config"
import axios from "axios"
export const Auth = ({type}:{type:"signup"|"signin"}) => {
  const navigate=useNavigate();
  const [postInputs,setPostInputs]=useState<SignupInput>({
    name:"",
    username:"",
    password:"",
  })
  async function sendRequest(){
   try
   {  const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`,postInputs);
     const jwt=response.data;
     console.log(jwt);
     
     localStorage.setItem("token", jwt);
     navigate("/blogs");
    }
    catch(e){
       alert("error while logging in")
    }
     
  }
  return (
    <div className="h-screen flex justify-center flex-col">
       <div className="flex justify-center">
        <div className="px-4">
          <div>
            <div className="text-3xl font-extrabold">
             {type==="signup"?"Create an account":"Login to your account"}
            </div>
            
          </div>
          {type==="signup"?<LabelledInput  label="Name" placeholder="Name" onChange={(e)=>{
            setPostInputs(({
              ...postInputs,
              name:e.target.value,
            }))
          }}/>:null}
          <LabelledInput label="Username" placeholder="Email" onChange={(e)=>{
            setPostInputs(({
              ...postInputs,
              username:e.target.value,
            }))
          }}/>
          <LabelledInput label="Password" type={"password"}placeholder="password" onChange={(e)=>{
            setPostInputs(({
              ...postInputs,
              password:e.target.value,
            }))
          }}/>
          <button onClick={sendRequest} type="button" className="w-full mt-10 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type==="signup"?"Sign up":"Sign in"}</button>
          <div className="text-slate-400 pl-4 pt-8">
                 {type==="signup"?"Already have an account ":"Dont have an Account"}
                  <Link  className="underline"to={type==="signup"?"/signin":"/"}>{type==="signup"?"Login":"Create an Account"}</Link>
            </div>
          </div>
           
       </div>
    </div>
  )
}
interface LabelledInputType{
  label:string,
  placeholder:string,
  onChange:(e:ChangeEvent<HTMLInputElement>)=>void,
  type?:string,
}
function LabelledInput({label,placeholder,onChange,type}:LabelledInputType){
  return <div>
  <label  className="block mb-2 text-sm font-medium  text-black">{label}</label>
  <input onChange={onChange} type={type||"text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
</div>
}
