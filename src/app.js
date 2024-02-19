import express  from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

const app  = express()// made app with express and transfer all properties

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))

app.use(express.json({limit: "16kb"}))

app.use(express.urlencoded({extended: true, limit: "16kb"}))// Giving objects inside objects

app.use(express.static("public"))//To save public assets
 app.use(cookieParser())


  export { app } 