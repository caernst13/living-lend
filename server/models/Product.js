const mongoose = require('mongoose')
const { Schema } = mongoose
const Category = require('./Category')

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        min: 0,
        default: 0
    },
    catagories: [
        Category.schema
    ]
});

const Product = mongoose.model('Order', productSchema);

module.exports = Product;