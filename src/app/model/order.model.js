const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    ID : String,
    user : String,
    phone : String,
    city : String,
    address : String,
    total : Number,
    products : [],
    date : String,
})

module.exports = mongoose.model('Ordine', ordineSchema);