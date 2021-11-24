const path = require('path')
const fs = require('fs').promises

const {db} = require('./db')
const {Music} = require('./Models/Music')
const {User} = require('./Models/User')


const seed = async () => {
    // clear out table
    await db.sync({force: true})

    //find path to our json file
    const seedPath = path.join(__dirname, 'music.json')
    const buffer = await fs.readFile(seedPath)

    //user path
    const userPatch = path.join(__dirname, 'user.json')
    const userBuffer = await fs.readFile(userPatch)

    //capture array of data
    const {data} = JSON.parse(String(buffer))

    const musicPromises = data.map(music => Music.create(music))

    //capture user data
    const {userData} = JSON.parse(String(userBuffer))
    const userPromises = userData.map(user => User.create(user))

    await Promise.all(musicPromises)
    await Promise.all(userPromises)
    console.log('Music data has been seccessfully populated into our table')

}

module.exports = seed