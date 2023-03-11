
//this is a basic example in order to test the server. Remove when adding actual code.
const resolvers = {
  Query: {
    products: async () => {
      // Logic to fetch products from database or other source
      const products = await Product.find();
      return products;
    },
  },
};
  
  module.exports = resolvers;