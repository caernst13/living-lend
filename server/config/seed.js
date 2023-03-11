const db = require('./connection');
const { Category, Product, User, Order } = require('../models');

db.once('open', async () => {
    await Category.deleteMany(), Product.deleteMany(), User.deleteMany(), Order.deleteMany();
    const categories = await Category.create([
        { name: 'Living Room' },
        { name: 'Dinning Room' },
        { name: 'Bedroom' },
        { name: 'Modern' },
        { name: 'Traditional' },
        { name: 'Rustic' },
        { name: 'Chair' },
        { name: 'Table' },
        { name: 'Lamp' }
    ]);

    console.log('categories Seeded');
    
    const products = await Product.create([
        {
            name: 'Living Room chair',
            description: 'A chair for your living room',
            price: 50,
            quantity: 20,
            categories: [categories[0]._id, categories[3]._id, categories[6]._id]
                
        
        },
        {
            name: 'Dinning Room Table',
            description: 'A table for your dinning room',
            price: 75,
            quantity: 30,
            categories: [categories[1]._id, categories[4]._id, categories[7]._id]
                
            
        },
        {
            name: 'Bedroom Lamp',
            description: 'A lamp for your bedroom',
            price: 90,
            quantity: 35,
            categories: [categories[2]._id, categories[5]._id, categories[8]._id]
                
            
        }

    ]);

    console.log('products seeded');

    await User.create([
        {
            firstName: 'John',
            lastName: 'doe',
            email: 'john@doe.com',
            password: 'johndoe1',
            orders: [products[0]._id, products[1]._id, products[2]._id,] 
            
        },
        {
            firstName: 'Jane',
            lastName: 'doe',
            email: 'jane@doe.com',
            password: 'janedoe1',
            orders: [products[0]._id, products[2]._id, products[2]._id,] 
            
        }
    ]);

    console.log('users seeded');      
    
    process.exit();
    
});