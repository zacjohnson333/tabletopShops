const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
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

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


app.get('/', (req, res) => {
    res.render('home')
});

app.get('/shops', async (req, res) => {
    const shops = await Shop.find({});
    res.render('shops/index', { shops });
});

app.get('/shops/new', (req, res) => {
    res.render('shops/new');
});

app.post('/shops', async (req, res) => {
    const shop = new Shop(req.body.shop);
    await shop.save();
    res.redirect(`/shops/${shop._id}`);
});

app.get('/shops/:id', async (req, res) => {
    const shop = await Shop.findById(req.params.id);
    res.render('shops/show', { shop });
});

app.get('/shops/:id/edit', async (req, res) => {
    const shop = await Shop.findById(req.params.id);
    res.render('shops/edit', { shop });
});

app.put('/shops/:id', async (req, res) => {
    const { id } = req.params;
    const shop = await Shop.findByIdAndUpdate(id, { ...req.body.shop });
    res.redirect(`/shops/${shop._id}`);
});

app.delete('/shops/:id', async (req, res) => {
    const { id } = req.params;
    await Shop.findByIdAndDelete(id);
    res.redirect('/shops');
});




app.listen(3000, () => {
    console.log('Serving on port 3000')
});