const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const {User, validateRegisterUser, validateLoginUser} = require("../models/User");
const {VerificationToken} = require("../models/VerificationToken");
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');



/**---------------------------------------
 * @desc Register New User -Sign Up
 * @route /api/auth/register
 * @method POST
 * @access public
 --------------------------------------- */
 module.exports.singup = asyncHandler(async(req,res) =>{
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
        fullname : req.body.fullname,
        email : req.body.email,
        password: hashedPasword, 
    });
    await user.save();

 // Creating new VerificationToken & save it toDB
  const verifictionToken = new VerificationToken({
    userId: user._id,
    token: crypto.randomBytes(32).toString("hex"),
  });
  await verifictionToken.save();

  // Making the link
  const link = `${process.env.CLIENT_DOMAIN}/users/${user._id}/verify/${verifictionToken.token}`;

  // Putting the link into an html template
  const htmlTemplate = `
    <div>
      <p>Click on the link below to verify your email</p>
      <a href="${link}">Verify</a>
    </div>`;

  // Sending email to the user
  await sendEmail(user.email, "Verify Your Email", htmlTemplate);

  // Response to the client
  res.status(201).json({
    message: "We sent to you an email, please verify your email address",
  });
});


 /**---------------------------------------
 * @desc login User
 * @route /api/auth/login
 * @method POST
 * @access public
 --------------------------------------- */
 module.exports.login =asyncHandler(async(req,res) => {
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
    if (!user.isAccountVerified) {
        let verificationToken = await VerificationToken.findOne({
          userId: user._id,
        });
    }
    

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






