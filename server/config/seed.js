const db = require('./connection');
const { Category, Product, User, Order } = require('../models');

db.once('open', async () => {
    await Category.deleteMany(), Product.deleteMany(), User.deleteMany(), Order.deleteMany();
    const categories = await Category.create([
        { name: 'Living Room' },
        { name: 'Dinning Room' },
        { name: 'Bedroom' },
    ]);

    console.log('categories Seeded');
    
    const products = await Product.create([
        {
            name: 'Living Room chair',
            description: 'A chair for your living room',
            image: "https://source.unsplash.com/AAy5l4-oFuw",
            price: 50.00,
            quantity: 20,
            category: categories[0]._id
                
        
        },
        {
            name: 'Dinning Room Table',
            description: 'A table for your dinning room',
            image: "https://source.unsplash.com/AAy5l4-oFuw",
            price: 75.00,
            quantity: 30,
            category: categories[1]._id
                
            
        },
        {
            name: 'Bedroom Lamp',
            description: 'A lamp for your bedroom',
            image: "https://source.unsplash.com/AAy5l4-oFuw",
            price: 90.00,
            quantity: 35,
            category: categories[2]._id
                
            
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