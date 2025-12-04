// Pakages Imports
const express = require("express");
const app = express()
const cookieParser = require("cookie-parser");
const cors = require('cors');

// Module Imports
const authRoutes = require("./Routes/auth.routes")
const foodRoutes = require("./Routes/food.routes")
const foodPartnerRoutes = require("../src/Routes/foodPartner.routes")

// Middlewares
app.use(cors({
    origin:"*",
    methods:["GET","POST"],
    credentials: true,
}))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth",authRoutes)
app.use("/api/food",foodRoutes)
app.use("/api/food-partner",foodPartnerRoutes)

// API's
app.get("/",async(req,resp)=>{
    resp.status(200).json("hello brother")
})
module.exports = app;