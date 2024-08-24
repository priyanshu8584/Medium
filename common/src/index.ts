import z from "zod"

export const signupInput=z.object({
  username:z.string().email(),
  password:z.string().min(6),
  name:z.string().optional()
})

export type SignupInput=z.infer<typeof signupInput>;

export const signinInput=z.object({
  username:z.string().email(),
  password:z.string().min(6),
 
})

export type SigninInput=z.infer<typeof signinInput>;

export const createBlogPost=z.object({
    title:z.string().max(50),
    content:z.string()
})
export type CreateBlogPost=z.infer<typeof createBlogPost>;

export const updateBlogPost=z.object({
    title:z.string().max(50),
    content:z.string(),
    id:z.number()
})
export type UpdateBlogPost=z.infer<typeof updateBlogPost>;