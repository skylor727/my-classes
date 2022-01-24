const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classSchema = new Schema({
  title: { type: String, unique: true },
  subject: String,
  instructor: String,
  difficulty: { type: Number, min: 1, max: 10 },
  enrollees: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

module.exports = mongoose.model("Class", classSchema);
