const express = require('express');
const request = require('request')
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home', {
        title: 'ABC Grocery Store',
        message: 'Welcome to ABC Grocery Store'
    });
});

app.get('/products', (req, res) => {
    request('https://fakestoreapi.com/products', function (error, response, body) {
        const products = JSON.parse(body);
        // console.log(products)
        res.render('products', { products });
    });
});

app.listen(3000, () => {
    console.log(`Server started at 3000`)
});