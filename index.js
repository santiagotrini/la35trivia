// index.js - server entry point
// import packages
const express  = require('express');
const mongoose = require('mongoose');
const morgan   = require('morgan');
const passport = require('passport');
// config vars
const PORT       = process.env.PORT       || 4000;
const DB         = process.env.DB         || 'mongodb://localhost/la35trivia';
// const JWT_SECRET = process.env.JWT_SECRET || 'I am Groot';
// app instance
const app = express();
// db connection
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
  .then(() => console.log(`DB connected @ ${DB}`))
  .catch(err => console.log(err));
// middleware
app.use(morgan('dev'));
app.use(express.json());
// auth
require('./config/passport')();
app.use(passport.initialize());
// routers
app.use('/', require('./routes/user'));
app.use('/', require('./routes/quiz'));
app.use('/', require('./routes/score'));
// listen
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
