const express = require("express");
require("dotenv").config();
const connectDB = require("./config/connectDB");
const contactRouter = require("./routes/contact")
const app = express();

//use middleware
app.use(express.json());
app.use("/api/contact",contactRouter)


connectDB();
const PORT = process.env.PORT || 5653;

app.get("/",(req,res)=>{
    res.status(200).send("Hello from server.js")
})

app.listen(PORT , (err)=>err? console.log(err) : console.log(`server is running on port ${PORT}`))