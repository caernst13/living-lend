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
    categories: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Category'
          }
    ]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;