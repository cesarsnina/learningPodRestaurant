
const express = require('express');
const {Restaurant, Menu, Item} = require('./models/index');
const seeFile = require('./seedDB');


const app = express();
const port = 3000;


app.use(express.static('public'));

seeFile()


//post method
app.post('/menus', async (req, res) => {
    let newMenu = req.body
    await Menu.create(newMenu)
    res.send('new menu created!')
})

app.post('/restaurants', async (req, res) => {
    let newRestaurant = req.body
    await Restaurant.create(newRestaurant)
    res.send('new restaurant created!')
})


//get method
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

app.get('/menus', async (req, res) => {
    let menus = await Menu.findAll()
    res.json({menus})
})

app.get('/restaurants/:id', async (req, res) => {
    let id = req.params.id;
    let singleRestaurant = await Restaurant.findByPk(id, {
        include: {model: Menu, as: 'menus'}
    })
    res.json({singleRestaurant})
})

app.get('/menus/:id', async (req, res) => {
    let id = req.params.id;
    let singleMenu = await Menu.findByPk(id, {
        include: {model: Item, as: 'items'}
    })
    res.json({singleMenu})
})



app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})