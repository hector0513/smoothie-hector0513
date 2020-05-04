const { gql } = require("apollo-server");

module.exports = gql`
  type Query {
    myUser: User!
  }
  type User {
    id: ID
    name: String
    last_name: String
    email: String
    create: String
  }
  type Token {
    token: String!
  }
  input UserInput {
    nombre: String!
    apellido: String!
    email: String!
    password: String!
  }
  input AuthInput {
    email: String!
    password: String!
  }
  type Mutation {
    #Usuarios
    newUser(user: UserInput): User
    authUser(input: AuthInput): Token
  }
`;
