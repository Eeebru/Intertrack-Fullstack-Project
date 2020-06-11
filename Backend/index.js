const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan('tiny'));



//The vey root route
app.get('/', (req, res) => {
  res.send({message: "WELCOME APP IN DEVELOPMENT!!"})
});




const PORT = process.env.APPPORT || 6000;

app.listen(PORT, ()=> {
  console.log(`Server Started at ${PORT}`);  
});