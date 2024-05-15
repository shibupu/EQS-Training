const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

require('./routes/product.routes')(app);
require('./routes/category.routes')(app);

app.get('/', (req, res) => {
    res.send('Welcome to Express Server');
});

app.listen(3000, () => {
    console.log(`Server started at 3000`)
});