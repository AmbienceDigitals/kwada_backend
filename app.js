const express = require('express');
const app = express();
const cors = require('cors')
const payments = require('./src/routes/payments');
const connectDB = require('./src/db/connect');
require('dotenv').config();
const notFound = require('./src/middleware/not-found');
const errorHandlerMiddleware = require('./src/middleware/error-handler');

// middleware
app.use(express.static('./public'));
app.use(cors())
app.use(express.json());

// routes

app.use('/', payments);

app.use(notFound);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
