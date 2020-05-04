const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: { type: String, require: true, trim: true },
  user_name: { type: String, require: true, trim: true },
  last_name: { type: String, require: true, trim: true },
  email: { type: String, require: true, trim: true, unique: true },
  password: { type: String, require: true, trim: true },
  create: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("User", UserSchema);
