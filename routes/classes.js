var express = require("express");
var router = express.Router();
var isLoggedIn = require("../config/auth");
const classesCtrl = require("../controllers/classes");

//GET index page
router.get("/", classesCtrl.index);

//POST the enrollment form
router.post("/enroll", classesCtrl.enrollInClass);

//GET enrollment page
router.get("/new", classesCtrl.new);

//GET the enrolled page
router.get("/enrolled", classesCtrl.enrolled);

// GET Individual class information
router.get("/:id", classesCtrl.show);

//DELETE the individual class
router.delete("/enrolled/:id", classesCtrl.delete);

module.exports = router;
