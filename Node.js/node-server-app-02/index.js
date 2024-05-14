const express = require('express');
const customers = require('./customers');
const app = express();
const bodyParser = require('body-parser');
const { blockAddNewCustomerRequest } = require('./middleware')

// app.use(bodyParser);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(blockAddNewCustomerRequest)

// app.use(bodyParser);
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send({message: 'Welcome to Customer Service Server 1.0'});
});

app.get('/customers', (req, res) => {
    var customersList = '<div>';
    for (let customer of customers) {
        customersList += `
            <ul>
                <li>${customer.id}</li>
                <li>${customer.firstName}</li>
                <li>${customer.lastName}</li>
                <li>${customer.address}</li>
                <li>${customer.contact}</li>
            </ul>
        `;
    }
    customersList += '/<div>';

    // res.send(`
    //     <div>
    //         <ul>
    //             <li>${customers[0].id}</li>
    //             <li>${customers[0].firstName}</li>
    //             <li>${customers[0].lastName}</li>
    //             <li>${customers[0].address}</li>
    //             <li>${customers[0].contact}</li>
    //         </ul>
    //     </div>
    // `);
    res.send(customersList);
});

app.post('/customer', (req, res) => {
    console.log(req.body);
    console.log(req.body.id);

    // const newCustomer = {
    //     id: 2,
    //     firstName: 'John',
    //     lastName: 'Luther',
    //     address: 'UK',
    //     contact: 546578
    // };

    const newCustomer = {
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        contact: req.body.contact
    };

    customers.push(newCustomer)
    // console.log(customer)
    res.send(customers)
});

app.put('/customer/:id', (req, res) => {
    const id = req.params.id;
    for (let customer of customers) {
        if (customer.id === parseInt(id)) {
            if (typeof req.body.firstName !== 'undefined') {
                customer.firstName = req.body.firstName;
            }

            if (typeof req.body.lastName !== 'undefined') {
                customer.lastName = req.body.lastName;
            }

            if (typeof req.body.address !== 'undefined') {
                customer.address = req.body.address;
            }

            if (typeof req.body.contact !== 'undefined') {
                customer.contact = req.body.contact;
            }
        }
    }

    // customers[id].firstName = 'Anand'
    res.send(customers)
});

app.delete('/customer/:id', (req, res) => {
    // customers.pop()

    const id = req.params.id;
    for (let i = 0; i < customers.length; i++) {
        if (customers[i].id === parseInt(id)) {
            customers.splice(i, 1);
        }
    }

    // console.log(customers)
    res.send(customers)
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
});
