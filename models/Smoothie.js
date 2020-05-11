const mongoose = require("mongoose");

const SmoothieSchema = mongoose.Schema({
  nombre: { type: String, require: true, trim: true, unique: true },
  user: { type: String, require: true, trim: true },
  frutas: [
    {
      fruta: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        trim: true,
        ref: "Fruta",
      },
    },
  ],
  liquido: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    trim: true,
    ref: "Liquido",
  },
  proteina: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    trim: true,
    ref: "Proteina",
  },
  porcentaje: {
    type: Number,
    require: true,
    trim: true,
  },
  create: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Smoothie", SmoothieSchema);
