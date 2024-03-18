const router =require("express").Router();
const { getAllUsersCtrl, getUserProfileCtrl, updateUserCtrl, UsersCountCtrl} = require("../controllers/usersController");
const { VerifyTokenAdmin, verifyTokenOnlyUser } = require("../middlewares/verifyToken");
const  validateId = require("../middlewares/validateId")

// /api/users/profile
router.route("/profile").get(VerifyTokenAdmin ,getAllUsersCtrl);


// /api/users/profile/:id
router.route("/profile/:id")
    .get(validateId,getUserProfileCtrl)
    .put(validateId, verifyTokenOnlyUser, updateUserCtrl);

// /api/users/count
router.route("/count").get(VerifyTokenAdmin, UsersCountCtrl);

module.exports = router;