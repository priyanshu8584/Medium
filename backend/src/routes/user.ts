import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import {signupInput} from '@priyanshu7/medium'
export const userRouter=new Hono<{
  Bindings:{
    DATABASE_URL:string,
    JWT_SECRET:string
  }
}>();

userRouter.post("/signup",async (c)=>{
  const body=await c.req.json();
  // const {success}=signupInput.safeParse(body);
  // if(!success)
  //   {
  //     c.status(411);
  //     c.json({
  //       message:"inputs not correct"
  //     })
  //   }
  const prisma= new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL,

  }).$extends(withAccelerate())
  try{
   const user= await prisma.user.create({
      data:{
        username:body.username,
        password:body.password,
       name:body.name
      }
    })
    console.log(body);
    const jwt = await sign({ id: user.id }, "priyanshu").catch((err) => {
      console.error("JWT sign error:", err);
      throw new Error("Failed to sign JWT");
    });
    return c.text(jwt);
  }
  catch(e){
    console.log(e);
    c.status(411)
    return c.text("there is an error")
  }
})
userRouter.post("/signin",async (c)=>{
  const body=await c.req.json();
  const prisma= new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL,

  }).$extends(withAccelerate())
  try{
   const user= await prisma.user.findFirst({
      where:{
        username:body.username,
        password:body.password
      }
    })
    if(!user)
      {
        console.log("incorrect creds");
        c.status(403);
        return c.text("incorrect credentials");
      }
    const jwt=await sign({id:user.id},c.env.JWT_SECRET);
    return c.text(jwt);
  }
  catch(e){
    console.log(e);
    c.status(411)
    return c.text("there is an error")
  }
})