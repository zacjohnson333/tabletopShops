const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Shop = require('./models/shop');

// no longer need to use userUnifiedToplogy, etc.
mongoose.connect('mongodb://localhost:27017/tabletop-shop');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});


const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
    res.render('home')
});

app.get('/makeshop', async (req, res) => {
    const shop = new Shop({ name: 'Corner Store', location: 'New Berlin' });
    await shop.save();
    res.send(shop);
});

app.listen(3000, () => {
    console.log('Serving on port 3000')
});