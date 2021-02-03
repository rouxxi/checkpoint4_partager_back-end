const express = require('express');
const app = express();
const port = 8080

app.listen(port, () => {
    console.log(`Vous etes bien sur le port: ${port}`)
})