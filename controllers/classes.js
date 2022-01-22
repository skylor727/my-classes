const Class = require("../models/class");

const index = (req, res) => {
  Class.find({}).then((classes) => {
    res.render("classes/index", { classes });
  });
};

const show = (req, res) => {
  Class.findById(req.params.id).then((classes) => {
    res.render("classes/show", { classes });
  });
};

const newClass = (req, res) => {
  Class.find({}).then((classes) => {
    res.render("classes/new", { classes });
  });
};

module.exports = {
  index,
  show,
  new: newClass,
};
