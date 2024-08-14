// require('dotenv').config({path: './env'})

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

//start lecture no - 13 - 00:00

connectDB()
 app.listen(process.env.PORT, ()=>{
  console.log(`server is running on ${process.env.PORT}`)
 })

/*
import express from "express";

const app = express()
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
        console.log("ERR:", error);
        throw error

    })

    app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`);
    })

  } catch (error) {
    console.log("ERROR :", error);
    throw err;
  }
})();


*/
