var express = require("express");
var router = express.Router();
var isLoggedIn = require("../config/auth");
const classesCtrl = require("../controllers/classes");


router.post("/enroll", classesCtrl.enrollInClass);
router.get("/new", classesCtrl.new);
// GET Individual class information
router.get("/:id", classesCtrl.show);

module.exports = router;
