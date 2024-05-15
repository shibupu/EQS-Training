const Customer = require('../models/customer');

const createCustomer = async (req, res) => {
    try {
        const { firstName, lastName, email } = req.body;
        const customer = await Customer.create({ firstName, lastName, email});
        res.status(201).json(customer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.findAll();
        res.json(customers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createCustomer,
    getAllCustomers
};
