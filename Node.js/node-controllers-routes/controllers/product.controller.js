const axios = require('axios');

exports.getAllProducts = async (req, res) => {
    const response = await axios.get('https://fakestoreapi.com/products');
    const products = JSON.parse(JSON.stringify(response.data));
    res.render('products', { products });
};

exports.getProductById = async (req, res) => {
    const id = req.params.id;
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    const product = JSON.parse(JSON.stringify(response.data));
    res.render('product', { product });
};
