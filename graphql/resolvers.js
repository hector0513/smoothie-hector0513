const User = require("../models/Users");

const bcryptjs = require("bcryptjs");
require("dotenv").config({ path: "variables.env" });
const jwt = require("jsonwebtoken");
const crearToken = (user, secret_wort, expiresIn) => {
  const { id, email, name, last_name, user_name, create } = usaurio;
  return jwt.sign(
    { id, email, name, last_name, user_name, create },
    secret_wort,
    {
      expiresIn,
    }
  );
};
module.exports = {
  Query: {
    myUser: async (_, __, { user }) => user,
  },

  Mutation: {
    newUser: async (_, { user }, { ctx }) => {
      // Revisar si el usuario esta registrado
      const { email, password } = user;
      const is_excit_user = await Usuario.findOne({ email });
      if (is_excit_user) {
        throw new Error("El usuario ya existe");
      }
      try {
        const salt = bcryptjs.genSaltSync(10);
        user.password = bcryptjs.hashSync(password, salt);
        const userdb = Usuario(user);
        userdb.save();
        return userdb;
      } catch (error) {
        console.log(error);
      }
      return existeUsuario;
    },
    authUser: async (_, { input }, { user }) => {
      if (!user) {
        const { email, password } = input;
        const is_excit_user = await Usuario.findOne({ email });
        if (!is_excit_user) {
          throw new Error("no excit user");
        }
        const passwordb = await bcryptjs.compare(
          password,
          is_excit_user.password
        );
        if (!passwordb) {
          throw new Error("the password is not correct");
        }
        return {
          token: crearToken(is_excit_user, process.env.SECRETA, "24h"),
        };
      } else {
        return {
          token: crearToken(user, process.env.SECRETA, "24h"),
        };
      }
    },
  },
};
