const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID!
    attribute: String!
  }

  type Product {
    _id: ID!
    name: String!
    description: String
    price: Float!
    quantity: Float
    categories: [Category]
  }

  type Query {
    products: [Product]!
  }

  type Order {
    _id: ID!
    purchaseDate: String
    products: [Product]
  }

  type User {
   _id: ID!
   firstName: String!
   lastName: String!
   email: String!
   password: String! 
   orders: [Order]
  }
`;

module.exports = typeDefs;
