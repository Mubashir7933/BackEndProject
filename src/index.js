//require('dotenv').config({path: './env'})

/*import dotenv from "dotenv"
import connectDB from "./db/index.js";


dotenv.config({
    path: './.env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port :${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MongoDB Connection failed !!! ", err);
})*/

import dotenv from "dotenv";
import express from "express"; // Import express as an ES module

import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
});

const app = express();

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port :${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log("MongoDB Connection failed !!! ", err);
    });






//This is a approach for connecting Db BASE
/*const app = express()

(async()=>{
    try{
    await mongoose.connect(`${process.env.MONGODB_URI}/
    ${DB_Name}`)
    app.on("error", (error) =>{
        console.log("ERRR", error);
        throw error
    })


app.listen(process.env.PORT, ()=>{
    console.log(`App is listening on port ${process.env.PORT}`)
})

    }
    catch(error){
        console.log("ERROR: ", error)
        throw err
    }
})()*/