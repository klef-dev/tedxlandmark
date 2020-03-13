const express = require("express");
const { register, contact } = require("../app/Controllers/UserController");
const router = express.Router();

router.post("/", register);
router.post("/contact", contact);

module.exports = router;
