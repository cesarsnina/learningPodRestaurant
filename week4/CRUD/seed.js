const path = require('path')
const fs = require('fs').promises

const {db} = require('./db')
const {Music} = require('./Models/Music')


const seed = async () => {
    // clear out table
    await db.sync({force: true})

    //find path to our json file
    const seedPath = path.join(__dirname, 'music.json')
    const buffer = await fs.readFile(seedPath)

    //capture array of data
    const {data} = JSON.parse(String(buffer))

    const musicPromises = data.map(music => Music.create(music))

    await Promise.all(musicPromises)
    console.log('Music data has been seccessfully populated into our table')

}

module.exports = seed