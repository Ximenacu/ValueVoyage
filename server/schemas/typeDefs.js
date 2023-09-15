const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Value {
    _id: ID
    name: String
    description: String
    example: String
  }

  type Query {
    values: [Value]
  }

`;

module.exports = typeDefs;