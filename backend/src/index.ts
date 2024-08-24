import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'
import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono<{
  Bindings:{
    DATABASE_URL:string,
    JWT_SECRET:string
    
  }
}>()
app.use("/*", cors({
  origin: '*',  // Or specify a domain like 'https://your-frontend-domain.com'
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE'], // specify allowed methods
  allowHeaders: ['Content-Type', 'Authorization'], // specify allowed headers
}));
app.route("/api/v1/user",userRouter);
app.route("/api/v1/blog",blogRouter);
app.get('/', (c) => {
  return c.text('Hello Hono!')
})

//postgres://avnadmin:AVNS_vEJ61fdeMBdwwJgOfuB@pg-7ee75aa-singh-2f2c.a.aivencloud.com:14685/defaultdb?sslmode=require
//DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiZjAyYzY0M2UtMzBmNS00MGJkLTg3MmMtMTJhYzk5MTc3OGRjIiwidGVuYW50X2lkIjoiNDExOTczNWJjODA5MzcwOTQ1MTc5MjU4NWE3ZWI5MTk1OTI0NDg3OGJkOTU4ZjYyOThjMWQ0ZTc0MzQxODQ1ZiIsImludGVybmFsX3NlY3JldCI6IjNlZTYxYjcwLWE0Y2ItNDhmYS05NDNhLWVhNDc1NzAxOTQxZiJ9.59g2N_yAK1DJrtlEJ25MfMdwiCq_L1VX6O9zwgW0q3k"
export default app
