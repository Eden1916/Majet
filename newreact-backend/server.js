require("dotenv").config();
const express = require("express");
const authRoute = require("./src/routes/authRoutes");
const categoryRoute = require("./src/routes/categoryRoutes");
const productGroupRoute = require("./src/routes/productGroupRoutes")
const productDetailRoute = require("./src/routes/productDetailRoutes")


const cors = require("cors");
const connectDB = require("./config/db.js");
const app = express();
connectDB();
app.use(cors());
  
app.get("/", (req, res)=>{
    res.send("Hello from backend")

})
app.use(express.json())

app.use('/api/auth', authRoute)
app.use('/api/categories', categoryRoute)
app.use("/api/product-groups", productGroupRoute);
app.use("/api/product-details", productDetailRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server is runing on port ${PORT}`)
})
