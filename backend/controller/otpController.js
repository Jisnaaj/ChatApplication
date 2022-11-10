const express = require("express");
const User = require("../models/user");
const nodemailer = require("nodemailer")

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
  
    module.exports = {sendOTP,getUserById ,savename,checkName};
  