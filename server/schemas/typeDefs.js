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
  type Auth {
    token: ID
    user: User
  }
  type Query {
  users: [User]!
  }
  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
