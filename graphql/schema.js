const { gql } = require("apollo-server");

module.exports = gql`
  type Query {
    mySmoothie: [Smoothie]!
    frutas: [Fruta]!
    liquidos: [Liquido]!
    proteinas: [Proteina]!
  }
  type Smoothie {
    id: ID
    nombre: String
    user: String
    frutas: [Fruta]
    liquido: Liquido
    proteina: Proteina
    porcentaje: Int
  }
  type Fruta {
    id: ID
    nombre: String
    valor: Int
  }
  type Liquido {
    id: ID
    nombre: String
    valor: Int
  }
  type Proteina {
    id: ID
    nombre: String
  }

  input SmoothieInput {
    nombre: String!
    frutas: [InputFruta]!
    liquido: ID!
    proteina: ID!
    porcentaje: Int!
  }
  input InputFruta {
    fruta: ID!
  }

  type Mutation {
    newSmoothie(input: SmoothieInput): Smoothie
    auth(input: String): String!
  }
`;
