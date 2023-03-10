const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID!
    attribute: String!
  }

  type Prduct {
    _id: ID!
    name: String!
    description: String
    price: Number!
    quantity: Number
    catagories: [Category]
  }

  type Order {
    _id: ID!
    purchaseDate: Date
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
