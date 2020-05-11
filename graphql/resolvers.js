const Smoothie = require("../models/Smoothie");
const Fruta = require("../models/Fruta");
const Liquido = require("../models/Liquido");
const Proteina = require("../models/Proteina");

require("dotenv").config({ path: "variables.env" });
const jwt = require("jsonwebtoken");
const crearToken = (uuid, secret_wort, expiresIn) => {
  return jwt.sign({ uuid }, secret_wort, {
    expiresIn,
  });
};
module.exports = {
  Query: {
    mySmoothie: async (_, __, { uuid }) => Smoothie.find({ user: uuid }),
    proteinas: async () => Proteina.find({}),
    liquidos: async () => Liquido.find({}),
    frutas: async () => Fruta.find({}),
  },
  Smoothie: {
    frutas: async ({ frutas }) =>
      frutas.map(({ fruta }) => Fruta.findById(fruta)),
    liquido: async ({ liquido }) => Liquido.findById(liquido),
    proteina: async ({ proteina }) => Proteina.findById(proteina),
  },
  Mutation: {
    auth: async (_, { input }) => crearToken(input, process.env.SECRET, "24h"),
    newSmoothie: async (_, { input }, { uuid }) => {
      const existeSmoothie = await Smoothie.findOne({ nombre: input.nombre });
      if (existeSmoothie) {
        throw new Error("ya existe");
      }
      input.user = uuid;
      const smoothie = Smoothie(input);
      smoothie.save();
      return smoothie;
    },
  },
};
