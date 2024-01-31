const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send("home")
})

app.get('/About', (req, res) => {
    res.send("home")
})

app.listen(port, (err) => { console.log(err) });