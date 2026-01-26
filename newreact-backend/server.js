require("dotenv").config();
const express = require("express");
const authRoute = require("./src/routes/authRoutes");
const categoryRoute = require("./src/routes/categorys");

const cors = require("cors");
//const mongoose = require("mongoose");
const connectDB = require("./config/db.js");
const app = express();
connectDB();
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  }));
  
app.get("/", (req, res)=>{
    res.send("Hello from backend")

})
app.use(express.json())

app.use('/api/auth', authRoute)
app.use('/api/categorys', categoryRoute)

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server is runing on port ${PORT}`)
})
