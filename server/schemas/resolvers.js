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
    //Mutation to add a user. Works with the sign up form. 
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    //Mutation to login. Waits to see if there is a user with the input credentials.
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  },
}
  module.exports = resolvers;