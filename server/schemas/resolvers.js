const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Category, Order } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
//this is a basic example in order to test the server. Remove when adding actual code.
const resolvers = {
  Query: {
    products: async () => {
      // Logic to fetch products from database or other source
      const products = await Product.find();
      return products;
    },
    users: async () => {
      return User.find({});
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    }
  },

}
  module.exports = resolvers;