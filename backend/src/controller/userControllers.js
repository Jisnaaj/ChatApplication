const signupmongo = require("../models/userModels");
const nodemailer = require('nodemailer');

const signup = async (req, res) => {
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers: Content-Type, application/json");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
  otp = req.params.otp;    
   console.log("ok")
  try {
    
    const newUser = await User.create({
      name: req.body.data.name,
      email: req.body.data.email,
      password:req.body.data.password,
     
    
      otp: otp,
    });

    console.log(newUser)

    res.status(201).send(newUser);
  } catch (err) {
    res.status(403).send("Cannot Create an User");
  }
};

const login = async (req,res) =>{
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers: Content-Type, application/json");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
  try{
    uname = req.body.user.username;
    pwd=req.body.data.password
    User.findOne({"username":uname},function(err,user){
      if(user){
        if(pwd == user.pwd){
          let payload = {subject:uname+pwd};
          let token =jwt.sign(payload,'secretkey');
          let userNames = {subject:uname};
          let userToken = jwt.sign(userNames.subject,'secretkey');
          const username = jwt.verify(userToken, "secretkey");
          res.status(200).send({user:true,token,username});
        }
        else
        {
          res.json({unathorised:true}).status(401);
        }
      }
      else
      {
        res.json({unathorised:true}).status(401);
      }
    })
  }
  catch{
    console.log("Login error");
  }
}

const sendOTP = async(req,res) =>{

  otp = req.params.otp;

  try{
    
       email= req.body.item.userEmail;
      
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'theresumewizardteam@gmail.com',
          pass: 'eqablhrqwjkadqsc'
      }
    });
    
    const mailOptions = {
          from: 'theresumewizardteam@gmail.com',
          to: req.body.item.userEmail,
          subject: `Send Your OTP`,
          html:`The password for your account has been reset. Please use this password to access your account. `+otp,
        };
    
    transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error)
            // res.send('error') 
          } else {
            console.log("Sent Successfully")
            // res.send('Sent Successfully')
          }
        }
          );
      }
      catch(err){
        console.log("Error While Sending OTP");
      }
    }

    const getUserById = async (req, res) => {
      try {
        const user = await User.findOne({ _id: req.params.userId });
        res.status(200).json({ otp: user.otp });
      } catch (err) {
        res.status(403);
      }
    }
const savename = async (req, res) => {
  try {
    username1 = req.body.item.nickname; 
    await User.findByIdAndUpdate({ _id: req.params.userId },{$set:{"username":username1}}).then((data)=>{
      res.send(data);
      })
    // const user = await User.findOne({ _id: req.params.userId });// data saving code
    // res.status(200).json({ username: username1 });
    console.log("username1=" + username1);
    
  } 
  catch (err) {
    console.log(err);
    // res.status(403);
  }
    };
   const checkName = 
   async (req, res) => {
    try {
     
      await User.find({$and:[{username:req.params.name}]}).then((data)=>{
      
        res.send(data);
        })
      
      
    } 
    catch (err) {
      console.log(err);
      // res.status(403);
    }
      };




module.exports = {
login,
signup,
sendOTP,
getUserById,
savename,checkName
};
