const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShopSchema = new Schema({
    name: String,
    image: [String],
    location: String,
    description: String,
    phone: String,
    link: String,
    features: [String]
});

module.exports = mongoose.model('Shop', ShopSchema);