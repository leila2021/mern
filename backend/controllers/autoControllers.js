const User = require("../models/User");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { name, lastname, mail, password } = req.body;
  try {
    let user = await User.findOne({ mail });
    // 1 check f user exist
    if (user) {
      return res.status(400).json([{ msg: "user is already exists" }]);
    }
    // 2 creat user
    user = new User({ name, lastname, mail, password });
    // 3 hash password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // 4 save user
    await user.save();
    // 5 login user (token)
    const payload = {
      userID: user._id,
    };
    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1h" });

    //6 response

    res.send({
      token,
      user: {
        name: user.name,
        lastname: user.lastname,
        mail: user.mail,
        _id: user._id,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
const login=async(req,res)=>{
  const { mail,password }=req.body
  try {
    //1 check if user exist
    let user = await User.findOne({ mail });
    if(!user){
      return  res.status(400).json([{ msg: "bad credential (mail)" }]);
    }
    //2 compare password
    const ismatch=await bcrypt.compare(password,user.password);
    if(!ismatch){
      return  res.status(400).json([{ msg: "bad credential (password)" }]);
    }

    //3 sign user(token)
    const payload = {
      userID: user._id,
    };
    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1h" });
    //repons
    res.send({
      token,
      user: {
        name: user.name,
        lastname: user.lastname,
        mail: user.mail,
        _id: user._id,
      },
    });
  } catch (error) {
    console.log(error)
  }



}
const getAuthUser=(req,res)=>{
res.send({user:req.user})
}

module.exports = {
  register,login,getAuthUser,
};
