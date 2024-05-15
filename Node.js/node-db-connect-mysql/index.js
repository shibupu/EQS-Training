const express = require('express');

const app = express();

const conn = require('./config/database');

app.use(express.json());

conn.authenticate()
    .then(res => {
        console.log('DB Connected')
    })
    .catch(err => {
        console.error(err)
    });

conn.sync();

const customerRoutes = require('./routes/customer');
app.use('/api/customers', customerRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to Express Server');
});

app.listen(3000, () => {
    console.log(`Server started at 3000`)
});
