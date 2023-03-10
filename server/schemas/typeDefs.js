const { gql } = require('apollo-server-express');


//this is a basic example in order to test the server. Remove when adding actual code.
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

module.exports = typeDefs;
