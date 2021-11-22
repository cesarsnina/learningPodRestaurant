
const express = require('express');
const {Restaurant} = require('./models/index')

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/now', (request, response) => {
    const date = new Date();
    response.send(date)
})

app.get('/flipcoin', (request, response) => {
    let data = ['head', 'tails'];
    let result = data[Math.floor(Math.random()*data.length)]
    response.send(result)
})

app.get('/restaurants', async (req, res) => {
    let restaurants = await Restaurant.findAll()
    res.json({restaurants})
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})