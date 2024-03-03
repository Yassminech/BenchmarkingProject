const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const {User, validateRegisterUser, validateLoginUser,Test} = require("../models/User");
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');



/**---------------------------------------
 * @desc Register New User -Sign Up
 * @route /api/auth/register
 * @method POST
 * @access public
 --------------------------------------- */
 module.exports.registerUserCtrl = asyncHandler(async(req,res) =>{
    //validation
    const {error}= validateRegisterUser(req.body);
    if (error){
        return res.status(400).json({message: error.details[0].message});

    }

    //is user already exists
    let user = await User.findOne ({email: req.body.email});
    if (user){
        return res.status(400).json({message: "User already exists"});
    }
     const salt =await bcrypt.genSalt(10);
     const hashedPasword =await bcrypt.hash(req.body.password, salt);

    //new user and save it to DB
    user = new User({
        username : req.body.username,
        email : req.body.email,
        password: hashedPasword, 
    });
    await user.save();
    //@TODO -sending email (verifiy account)

    //send a response to client 
    res.status(201).json({message : "You registered successfuly, please log in"});
 });

 /**---------------------------------------
 * @desc login User
 * @route /api/auth/login
 * @method POST
 * @access public
 --------------------------------------- */
 module.exports.loginUserCtrl =asyncHandler(async(req,res) => {
    //Validation
    const {error}= validateLoginUser(req.body);
    if (error){
        return res.status(400).json({message: error.details[0].message});

    }
    //is user exist
    const user = await User.findOne({email : req.body.email});
    if (!user){
        return res.status(400).json({message: "invalid email or password"});
    }
    //check the password 
    const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordMatch){
        return res.status(400).json({message: "invalid email or password"});
    }

    //@TODO -sending email(verify account if not verified)

    //genrate token (jwt)-new token
    const token= user.generateAuthToken();

    //response to client 
    res.status(200).json({
        _id : user._id,
        isAdmin : user.isAdmin,
        profilePhoto: user.profilePhoto,
        token,
    });


});



module.exports.Test =  asyncHandler(async(req, res) => {
    res.send("welcome user")
  });