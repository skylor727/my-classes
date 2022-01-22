const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classSchema = new Schema({
  title: String,
  subject: String,
  instructor: String,
  difficulty: { type: Number, min: 1, max: 10 },
});

module.exports = mongoose.model("Class", classSchema);
