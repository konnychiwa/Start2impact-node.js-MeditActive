const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.models.js');
const productsRoute = require('./routes/product.route.js');
const app = express();
const PORT = 8080;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// route
app.use('/api/products', productsRoute);

app.get('/', (req, res) => {
  res.send('Hello from Node API');
});

mongoose
  .connect(
    'mongodb+srv://Konny:m8mvNWNk0QIgpjd8@cluster0.vqx7n.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(() => {
    console.log('Connected!');
    app.listen(PORT, () => {
      console.log(`The server is hosted at http://localhost:${PORT}`);
    });
  });
