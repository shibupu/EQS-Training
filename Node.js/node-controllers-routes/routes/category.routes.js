module.exports = app => {
    const router = require("express").Router();
    const controller = require("../controllers/category.controller");

    // Get all categories
    router.get("/categories/all", controller.getAllCategories);

    // Get products by a category
    router.get("/products/category/:category", controller.getProductsByCategory);

    app.use('/api', router);
};
