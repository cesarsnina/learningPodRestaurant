const express = require('express')
const app = express()
const PORT = 3000


const seedDB = require('./seedDB')
const {Card, Collector} = require('./Models/index')
const { Sequelize } = require('sequelize/dist')
const Op = Sequelize.Op

app.use(express.json())

seedDB();

//Route
//A route that can buy a card. if a card is bought it will charge the collector
app.post('/cards/new', async (req, res) => {
    const newCard = {
        name : req.body.name,
        imgURL : req.body.imgURL,
        cost: req.params.cost,
        collector_id: req.params.collector_id
    }
    await Card.create(newCard)
    //Collector.charge(newCard.cost)

    res.send('new card bought')
})

//A route that will generate a pack of 10 of cards for the collector
app.get('/cards', async(req, res) => {
    let tenCards = await Card.findAll({
        where: {
            id: {
                [Op.between]:[1, 13]
            }
        }
    })

    res.json({tenCards})

})




app.listen(PORT, () => {
    console.log(`Server is now listening to port: ${PORT}`)
})