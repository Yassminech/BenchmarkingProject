const router = require("express").Router();
const {singup, login}= require("../controllers/authController");




// /api/auth/register
router.post("/register", singup);

// /api/auth/login
router.post("/login", login);




module.exports = router;