require('dotenv').config();
const express = require('express');
const app = express();

const routes = require('./routes');

app.use('/api', routes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})