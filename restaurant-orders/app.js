// app.js

const express = require('express');
const bodyParser = require('body-parser');
const ordersRouter = require('./routes/orders');

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Rutas
app.use('/orders', ordersRouter);

// Servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
