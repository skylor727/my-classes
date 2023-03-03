const Class = require("../models/class");
const User = require("../models/user");

const create = (req, res) => {
  Class.findOne({ "instructor.name": req.body.instructor })
    .then((c) => {
      Class.create({
        title: req.body.title,
        subject: req.body.subject,
        instructor: c.instructor,
        difficulty: parseInt(req.body.difficulty),
        user: req.user._id,
      });
    })
    .then(() => res.redirect("/my-classes/classes"));
};

const index = (req, res) => {
  Class.find({}).then((classes) => {
    User.findById(req.user.id).then((user) =>
      res.render("classes/index", { classes, user })
    );
  });
};

const show = (req, res) => {
  Class.findById(req.params.id).then((classes) => {
    console.log(classes.instructor.name);
    res.render("classes/show", {
      classes,
      firstName: classes.instructor.name.split(" ")[0],
    });
  });
};

const newClass = (req, res) => {
  Class.find({}).then((classes) => {
    res.render("classes/new", { classes });
  });
};

const enrollInClass = (req, res) => {
  User.findById(req.user.id).then((user) => {
    Class.find({ title: { $in: req.body.enroll } }).then((classes) => {
      classes.forEach((c) => {
        c.enrollees.push(user);
        c.save();
      });
      res.redirect("/my-classes/classes/enrolled");
    });
  });
};

const enrolled = (req, res) => {
  Class.find({ enrollees: req.user._id })
    .populate("enrollees")
    .then((classes) => {
      res.render("classes/enrolled", { classes });
    });
};

const deleteClass = (req, res) => {
  Class.updateMany(
    { title: { $in: req.body.unenroll } },
    { $pull: { enrollees: req.user.id } }
  ).then((classes) => res.redirect("/my-classes/classes/enrolled"));
};

const remove = (req, res) => {
  Class.findById(req.params.id).then((fClass) => {
    fClass.remove();
    res.redirect("/my-classes/classes");
  });
};

module.exports = {
  show,
  index,
  new: newClass,
  enrollInClass,
  enrolled,
  delete: deleteClass,
  create,
  remove,
};
