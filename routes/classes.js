var express = require("express");
var router = express.Router();
var isLoggedIn = require("../config/auth");
const classesCtrl = require("../controllers/classes");

router.get("/", classesCtrl.index);

router.post("/enroll", classesCtrl.enrollInClass);

router.get("/new", classesCtrl.new);

router.get("/enrolled", classesCtrl.enrolled);
// GET Individual class information
router.get("/:id", classesCtrl.show);

module.exports = router;
