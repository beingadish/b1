require('dotenv').config()

const express = require('express');
const app = express();
const port = process.env.port;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

console.log('Chai aur Code');