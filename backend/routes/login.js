const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController")

router.post("/", loginController.loginUser);
router.get("/", loginController.allusers);

module.exports = router;