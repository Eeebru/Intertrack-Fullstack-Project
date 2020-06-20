const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

//The vey root route
app.get('/', (req, res) => {
  res.send({ message: 'WELCOME APP IN DEVELOPMENT!!' });
});

//signup and login routes
app.use('/', require('./routes/user-signup-login'));
// User routes
app.use('/user', require('./routes/user'));
//add product route
app.use('/', require('./routes/product'));

app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: err.status,
    });
  });
}
const PORT = process.env.APPPORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});
