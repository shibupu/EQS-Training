const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({message: "Welcome to Express Server!"});
});

app.get('/:name/:email', (req, res) => {
    const name = req.params.name;
    const email = req.params.email;
    res.send(`<h1>Success</h1>`);
    console.log(name, email);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
});
