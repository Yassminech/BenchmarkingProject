const router = require("express").Router();
const {registerUserCtrl , loginUserCtrl, Test}= require("../controllers/authController")
const passport = require('passport')



// /api/auth/register
router.post("/register", registerUserCtrl);

// /api/auth/login
router.post("/login", loginUserCtrl);

router.get("/test",passport.authenticate('jwt', { session: false }),Test);




module.exports = router;