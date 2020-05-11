const mongoose = require("mongoose");

const ProteinaSchema = mongoose.Schema({
  nombre: { type: String, require: true, trim: true, unique: true },
});

module.exports = mongoose.model("Proteina", ProteinaSchema);
