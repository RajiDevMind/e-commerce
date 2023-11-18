const express = require("express");
const router = express.Router();
const { login, profile, register } = require("../controller/user");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/:id").get(profile);

module.exports = router;
