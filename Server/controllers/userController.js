const bcrypt = require("bcrypt");
const User = require("../model/User");
const jwt = require("jsonwebtoken");
const mailService = require("../middlewares/nodemailer");
const isEmail = require("../middlewares/email");

const getUser = (req, res) => {
  res.json(req.user);
};
const signup = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(req.body.password, salt);
  const emailval=await isEmail(req.body.email)
  if(emailval==true){
    mailService(req.body.username,req.body.email)
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: passwordHash,
    });
    const token = await jwt.sign({ userId: user._id }, process.env.SECRET_KEY);
    res.status(201).json({ success:true,message :"User register successfully",token });
  }else{
    res.json({success:false, message :"Please Enter Valid Email "});
  }

};
const login = async (req, res) => {
  const { email, password, username } = req.body;
  const user = await User.findOne({email:email});
  if (user) {
    const pass=await bcrypt.compare(password, user.password)
      if (pass === true) {
     const token=await jwt.sign({ userId: user._id }, process.env.SECRET_KEY,)
        
        res.json({ success: true, message: "Login Successfully", token });
      }else {
        res.json({ success: false, message: "Incorrect Password" });
      }
  } else {
    res.json({success:false, message :"User Not Register "});
    }
 
};
module.exports = {
  getUser,
  signup,
  login,
};
