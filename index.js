const { ApolloServer } = require("apollo-server");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");
const conectarDB = require("./config/db");
require("dotenv").config({ path: "variables.env" });
const jwt = require("jsonwebtoken");
conectarDB();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers["authorization"];
    if (token) {
      try {
        const uuid = jwt.verify(token, process.env.SECRET);
        return uuid;
      } catch (error) {
        console.log(error);
      }
    }
  },
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`servidor listo en ${url}`);
});
