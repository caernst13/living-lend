const db = require('./connection');
const { Category, Product, User } = require('../models');

db.once('open', async () => {
    await Category.deleteMany(), Product.deleteMany(), User.deleteMany();
    const categories = await Category.insertMany([
        { attribute: 'Living Room' },
        { attribute: 'Dinning Room' },
        { attribute: 'Bedroom' },
        { attribute: 'Modern' },
        { attribute: 'Traditional' },
        { attribute: 'Rustic' },
        { attribute: 'Chair' },
        { attribute: 'Table' },
        { attribute: 'Lamp' }
    ]);

    console.log('categories Seeded');
    
    const products = await Product.insertMany([
        {
            name: 'Living Room chair',
            description: 'A chari for your living room',
            price: 50,
            quantity: 20,
            categories: [
                {
                    categories: [categories[0]._id, categories[3]._id, categories[6]._id]
                }
            ]
        },
        {
            name: 'Dinning Room Table',
            description: 'A table for your dinning room',
            price: 75,
            quantity: 30,
            catagories: [
                {
                    categories: [categories[1]._id, categories[4]._id,categories[7]._id]
                }
            ]
        },
        {
            name: 'Bedroom Lamp',
            description: 'A lamp for your bedroom',
            price: 90,
            quantity: 35,
            catagories: [
                {
                    categories: [categories[2]._id, categories[5]._id,categories[8]._id]
                }
            ]
        }

    ]);

    console.log('products seeded');

    await User.insertMany([
        {
            firsName: 'John',
            lastName: 'doe',
            email: 'john@doe.com',
            password: 'johndoe',
            orders: [
                { products: [products[0]._id, products[1]._id, products[2]._id,] }
            ]
        },
        {
            firsName: 'Jane',
            lastName: 'doe',
            email: 'jane@doe.com',
            password: 'janedoe',
            orders: [
                { products: [products[0]._id, products[2]._id, products[2]._id,] }
            ]
        }
    ]);

    console.log('users seeded');        
    
});