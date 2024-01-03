const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
    item:{
        type: String,
        required: true
    },
    quantity:{
        type: String,
        required: true
    },
    weight:{
        type: String,
    },
    tare:{
        type: String,
    },
    net:{
        type: String,
    },
    inDate:{
        type: String,
        required: true
    },
    operator:{
        type: String,
        required: true
    },
    vendor:{
        type: String,
        required: true
    },
    status:{
        type: String,
    },
    price:{
        type: String,
        required: true
    },
    notes:{
        type: String,
    },
    unifiedName:{
        type: String,
    }
}, {timestamps: true})

const Item = mongoose.model('Inventory', inventorySchema);
module.exports = Item;