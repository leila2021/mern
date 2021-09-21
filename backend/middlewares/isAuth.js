const User=require('../models/User');
var jwt = require("jsonwebtoken");
const isAuth = async (req,res,next)=>{
 const token=req.headers.authorization

 try {
    var decoded = jwt.verify(token, process.env.SECRET);
     const user=await User.findById(decoded.userID).select("-password")

   if (!user) {
    return  res.status(401).send([{ msg: "non authorisé" }])
   }
  req.user=user;
  next();
 } catch (error) {
     console.log(error);
 }

}
module.exports=isAuth;