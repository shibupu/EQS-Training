const axios = require('axios');

exports.getAllCategories = async (req, res) => {
    const response = await axios.get('https://fakestoreapi.com/products/categories');
    const categories = JSON.parse(JSON.stringify(response.data));
    res.render('categories', { categories });
};

exports.getProductsByCategory = async (req, res) => {
    const category = req.params.category;
    const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
    console.log(response);
    const products = JSON.parse(JSON.stringify(response.data));
    res.render('products', { products });
};
