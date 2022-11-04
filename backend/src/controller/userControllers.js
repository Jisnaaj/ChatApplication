const signupmongo = require("../models/userModels");
const nodemailer = require('nodemailer');

const login = (req,res)=>{
    try{
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Headers: Content-Type, application/json");
        res.header("Access-Control-Allow-Headers: Content-Type, Authorization");
        res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");
        
        let logindata= {
           
            email:req.body.data.email,
            password:req.body.data.password
        }  
            
 signupmongo.findOne({
      "email":logindata.email
      },

      function(err,user){
        if(user) {
        if(logindata.password==user.password){
        
         let payload = {subject:logindata.email+logindata.password}
         let token =jwt.sign(payload,'secretkey')
         let userEmail = {subject:logindata.email};
         let userToken = jwt.sign(userEmail.subject,'secretkey');
         const decoded1 = jwt.verify(userToken, "secretkey");
         res.status(200).send({student:true,token,decoded1});
      console.log(payload);
      console.log(token);
      console.log(userEmail);
      console.log(userToken);
      }
    }})     
}
    catch(e){
        console.log(e);
    }
}

const signup =  async (req,res)=>{
  
    
     
            res.header("Access-Control-Allow-Origin","*");
            res.header("Access-Control-Allow-Headers: Content-Type, application/json");
            res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
           otp = req.params.otp;
           try{
            const newUser = await User.create({
                  name:req.body.data.name,
                  email:req.body.data.email,
                  password:req.body.data.password,
                  otp:otp,
                
              })
           console.log(signups)
              signupmongo.findOne({
                "email":signups.email
                },
              function(err,user){  
                
                if(!user){
                  console.log("test2")
                    var post = new signupmongo(signups)
                    post.save(function (err) {
                      if (!err) {
                        res.json({status:true}).status(200);
                          
                        }
                      else
                        {
                            console.log(err);
                        }
                       }); 
                      }
                      else
                      {
                        res.json({userexist:true}).status(406);
                      }
             
           });
    
    }
    catch(e){
    console.log(e);
    }
}
// /
// const allChatHandles = async (req,res) => {
//   try{
//     uName = req.body.item;
//     User.find({$and:[{userName:uName}]}).then((data)=>{
//       res.send(data);
//      });
//   }
//   catch (err){
//     console.log('Error while fetching existing chat handles');
//   }
// }
// const allExistingEmails = async (req,res) => {
//   try{
//     userEmail = req.body.item;
//     User.find({$and:[{email:userEmail}]}).then((data)=>{
//       res.send(data);
//      });
//   }
//   catch (err){
//     console.log('Error while fetching existing chat handles');
//   }
// }

const sendOTP = async (req,res) => {
  try{
    userEmail = req.body.item;
    otp = req.params.otp;
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'theresumewizardteam@gmail.com',
          pass: 'eqablhrqwjkadqsc',
      }
    });
    const mailOptions = {
      from: 'theresumewizardteam@gmail.com',
      to: 'jisnaajvinu@gmail.com',
      // to: userEmail,
      subject: `OTP for chat application`,
      html:`Your OTP for verifying your email for chat application is ` + otp
    };

      transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error)
      } else {
        console.log("email sent successful")
      }
    }
      );
  }
  catch (err){
    console.log('Error while sending OTP');
  }
}

  const getUserById = async (req, res) => {
    try {
      const user = await User.findOne({ _id: req.params.userId });
      res.status(200).json({ otp: user.otp });
    } catch (err) {
      res.status(403);
    }
  };

  const verifyOTP = async (req, res) => {
    try {
      id = req.body.item;
      await User.findByIdAndUpdate({ _id: id },{$set:{"otpVerified":"1"}}).then((data)=>{
        res.send(data);
      })
    } catch (err) {
      res.status(403);
    }
  };

  const createUserName = async (req, res) => {
    try {
      id = req.params.userId;
      userName = req.body.item;
      await User.findByIdAndUpdate({ _id: id },{$set:{"userName":userName}}).then((data)=>{
        res.send(data);
      })
    } catch (err) {
      res.status(403);
    }
  };

module.exports = {
login,
signup,
sendOTP,
verifyOTP,
getUserById
};
