const Sequelize = require('sequelize');
const { DB_USER, DB_PASS } = process.env;
const sequelize = new Sequelize('gamedb', DB_USER, DB_PASS, {
    host: 'localhost',
    port: 5433,
    dialect: 'postgres',
});

sequelize.authenticate().then(
    function success() {
        console.log("Connected to DB");
    },

    function fail(err) {
        console.log(`Error: ${err}`);
    }
);

module.exports = sequelize;