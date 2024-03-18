const asyncHandler = require("express-async-handler");
const {User, validateUpdateUser} = require("../models/User");
const bcrypt = require("bcryptjs");

/**---------------------------------------
 * @desc GET all profiles users
 * @route /api/users/profile
 * @method GET
 * @access private (only admin)
 --------------------------------------- */
 module.exports.getAllUsersCtrl = asyncHandler(async (req, res) => {
   const users = await User.find().select("-password");
   res.status(200).json(users);
});

/**-----------------------------------------------
 * @desc    Get User Profile
 * @route   /api/users/profile/:id
 * @method  GET
 * @access  public
 ------------------------------------------------*/
 module.exports.getUserProfileCtrl = asyncHandler(async (req, res) => {
   const user = await User.findById(req.params.id).select("-password")
   if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
   res.status(200).json(user);
 })

/**-----------------------------------------------
 * @desc    Update User Profile
 * @route   /api/users/profile/:id
 * @method  PUT
 * @access  private (only user himself)
 ------------------------------------------------*/
 module.exports.updateUserCtrl = asyncHandler(async (req, res) => {
   const { error } = validateUpdateUser(req.body);
   if (error) {
     return res.status(400).json({ message: error.details[0].message });
   }
 
   if (req.body.password) {
     const salt = await bcrypt.genSalt(10);
     req.body.password = await bcrypt.hash(req.body.password, salt);
   }
 
   const updatedUser = await User.findByIdAndUpdate(
     req.params.id,
     {
       $set: {
         username: req.body.username,
         password: req.body.password,
       },
     },
     { new: true }
   ).select("-password")
 
   res.status(200).json(updatedUser);
 });

/**-----------------------------------------------
 * @desc    Get Users Count
 * @route   /api/users/count
 * @method  GET
 * @access  private (only admin)
 ------------------------------------------------*/
 module.exports.UsersCountCtrl = asyncHandler(async (req, res) => {
   const count = await User.count();
   res.status(200).json(count);
 });



  

 
