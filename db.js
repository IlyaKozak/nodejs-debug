const Sequelize = require('sequelize');

const { 
  DB_HOST,
  DB_PORT,
  DB,
  DB_USER,
  DB_PASSWORD
} = process.env;

const sequelize = new Sequelize(DB, DB_USER, DB_PASSWORD, {
  host: DB_HOST || 'localhost',
  port: DB_PORT || 5433,
  dialect: 'postgres',
  logging: false,
});

sequelize.authenticate().then(
  function success() {
    console.log('Connected to DB.');
  },
  function fail(err) {
    console.log(`Error: ${err}`);
  }
);

module.exports = sequelize;