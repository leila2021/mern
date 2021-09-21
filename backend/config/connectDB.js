const mongoose=require('mongoose');
require('dotenv').config({ path:"./config/.env" });
const connectDB=async()=>{
   try {
     await mongoose.connect(process.env.dbURL);
  
    console.log("database connect");
   
   } catch (err) {
    (err)=>console.log(err)
   }



}
module.exports=connectDB