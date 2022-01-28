require("dotenv").config();

// Connect to the db
require("./config/database");

const Class = require("./models/class");

const data = require("./data");
Class.deleteMany({}).then(() => {
  Class.create(data.classes).then(process.exit);
});
