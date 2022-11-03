const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Shop = require('../models/shop');

// no longer need to use userUnifiedToplogy, etc.
mongoose.connect('mongodb://localhost:27017/tabletop-shop');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Shop.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const shop = new Shop({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            name: `${sample(descriptors)} ${sample(places)}`,
            image: 'https://source.unsplash.com/collection/4959235',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut tenetur sapiente dolor molestias modi ex numquam culpa hic autem! Eius dolores deleniti quis accusantium asperiores repellendus illum, sapiente facilis expedita!',
            phone: '555-555-5555'
        });
        await shop.save();
    }
};

seedDB().then(() => {
    mongoose.connection.close();
    console.log('Connection terminated');
});