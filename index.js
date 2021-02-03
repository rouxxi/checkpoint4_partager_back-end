const express = require('express');
const cors = require('cors')
const app = express();
const port = 8080
const route = require('./router/index');

app.listen(port, (error) => {
    error
        ?
        console.log(error) :
        console.log(`Vous etes bien sur le port: ${port}`)
})


app.use(cors())
app.use(express.json());

app.use('/api', route)

module.exports = app;