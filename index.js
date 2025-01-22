const express = require('express');
const mongoose = require('mongoose');
const usersRoute = require('./routes/user.routes.js');
const intervalRoute = require('./routes/interval.routes.js');
const app = express();
const PORT = 8080;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// route
app.use('/api/users', usersRoute);
app.use('/api/intervals', intervalRoute);

app.get('/', (req, res) => {
  res.send('Hello from Node API');
});

mongoose
  .connect(
    'mongodb+srv://Konny:yTlt25we9JvwUgp2@cluster0.7jvau.mongodb.net/start2impact-Node?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(() => {
    console.log('Connected!');
    app.listen(PORT, () => {
      console.log(`The server is hosted at http://localhost:${PORT}`);
    });
  });
