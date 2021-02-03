const express = require('express');
const app = express();
const port = 8080
const route = require('./router/index');

app.listen(port, () => {
    console.log(`Vous etes bien sur le port: ${port}`)
})

app.use('/', route)

module.exports = app;