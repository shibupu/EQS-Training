const { Sequelize } = require('sequelize');

const conn = new Sequelize(
    'eqs_training',
    'root',
    'password',
    {
        dialect: 'mysql',
        host: 'localhost'
    }
);

module.exports = conn;