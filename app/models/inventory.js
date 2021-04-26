const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const InventorySchema = new Schema({
    catagory: { type: String, required: true },
    partDetails: { 
        manufacturer: { type: String, default: null },
        type: { type: String, default: null },
        size: { type: String, defualt: null }
    },
    price: { type: Number, required: true }, 
    quantity: { type: Number, default: 0 },
});

const Inventory = mongoose.model('Inventory', InventorySchema);
module.exports = Inventory
