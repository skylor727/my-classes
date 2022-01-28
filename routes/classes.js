var express = require("express");
var router = express.Router();
const authRole = require("../config/basicAuth");
const classesCtrl = require("../controllers/classes");

//GET index page
router.get("/", classesCtrl.index);

//POST the enrollment form
router.post("/enroll", classesCtrl.enrollInClass);

router.post("/create", authRole("ADMIN_ROLE"), classesCtrl.create);

//GET enrollment page
router.get("/new", classesCtrl.new);

//GET the enrolled page
router.get("/enrolled", classesCtrl.enrolled);

// GET Individual class information
router.get("/:id", classesCtrl.show);

//DELETE the class from the list if you are authorized
router.delete("/:id", authRole("ADMIN_ROLE"), classesCtrl.remove);

//UNENROLL the individual class
router.delete("/enrolled/:id", classesCtrl.delete);

module.exports = router;
