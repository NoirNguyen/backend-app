const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const auth = require("../middlewares/auth.middleware");

router.get("/", auth, userController.getUsers);
router.post("/login", userController.login);

module.exports = router;
