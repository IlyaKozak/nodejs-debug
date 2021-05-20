require('dotenv').config();
const express = require('express');
const db = require('./db');
const user = require('./controllers/usercontroller');
const game = require('./controllers/gamecontroller');
const validateSession = require('./middleware/validate-session');

const PORT = process.env.PORT || 4000;
const app = express();

db.sync();
app.use(express.json());
app.use('/api/auth', user);
app.use(validateSession);
app.use('/api/game', game);
app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});