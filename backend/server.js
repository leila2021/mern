const express=require('express');
const connectDB = require('./config/connectDB');
const app=express();
const autoRoutes=require("./routes/authoRoutes");
const loger =require('./middlewares/loger')

//middelwars
app.use(express.json())
app.use ("/user",loger)


app.use("/user",autoRoutes)
//connection BD
 connectDB();

 //Start server
 const PORT =process.env.PORT || 5000
 app.listen(PORT,
    (err)=> err ? console.log(err): console.log("server is running on 5000")
    
    )