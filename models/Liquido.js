const mongoose = require("mongoose");

const LiquidoSchema = mongoose.Schema({
  nombre: { type: String, require: true, trim: true, unique: true },
  valor: { type: Number, require: true, trim: true },
});

module.exports = mongoose.model("Liquido", LiquidoSchema);
