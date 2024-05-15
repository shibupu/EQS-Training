module.exports = app => {
    const router = require("express").Router();
    const controller = require("../controllers/product.controller");

    // Get all products
    router.get("/products/all", controller.getAllProducts);

    // Get a product by id
    router.get("/product/:id", controller.getProductById);

    app.use('/api', router);
};
