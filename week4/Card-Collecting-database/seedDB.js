const path = require('path')
const fs = require('fs').promises

const {db} = require('./db')
const {Card, Collector} = require('./Models/index')



const seedDB = async () => {
    // clear out table
    await db.sync({force: true})

    //find card path to our json file
    const seedCard = path.join(__dirname, 'card.json')
    const cardBuffer = await fs.readFile(seedCard)

    //collector path
    const collectorPath = path.join(__dirname, 'collector.json')
    const collectorBuffer = await fs.readFile(collectorPath)

    //capture card data
    const {cards} = JSON.parse(String(cardBuffer))

    const cardPromises = cards.map(card => Card.create(card))

    //capture collector data
    const {collectors} = JSON.parse(String(collectorBuffer))
    const collectorPromises = collectors.map(collector => Collector.create(collector))

    await Promise.all(cardPromises)
    await Promise.all(collectorPromises)
    console.log('Card and Collector data has been seccessfully populated into our tables')

}

module.exports = seedDB