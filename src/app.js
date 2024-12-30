import express from "express"
import cors from "cors"
import ErrorHandling from './middlewares/ErrorHandler.js';
import cookieparser from "cookie-parser"
import route from "./routes/index.js"
import ApiError from "./utils/ApiError.js";
const app =express()
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true // if your frontend makes requests with cookies
  }));
app.use(express.json({limit:'10mb'}))
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(cookieparser())
app.get('/login', (req, res) => {
  res.send('Hello World!')
})
app.use("/api/v1",route)
app.use("*",(req,res)=>{
    throw new ApiError(404,"page not found ")
})
app.use(ErrorHandling)
export {app}