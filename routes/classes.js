var express = require("express");
var router = express.Router();
var isLoggedIn = require("../config/auth");
const classesCtrl = require("../controllers/classes");
//GET /classes (display all enrolled classes);
router.get("/", classesCtrl.index);

module.exports = router;
