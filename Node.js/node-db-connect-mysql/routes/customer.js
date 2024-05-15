const express = require('express');
const router = express.Router();
const { createCustomer, getAllCustomers } = require('../controllers/customer');

router.post('/', createCustomer);
router.get('/', getAllCustomers);

module.exports = router;
