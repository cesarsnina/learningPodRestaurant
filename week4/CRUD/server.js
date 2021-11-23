const express = require('express')
const app = express()
const PORT = 3000

const seed = require('./seed')
const {db} = require('./db')
const {Music} = require('./Models/Music')

//body parser for jsaon request
app.use(express.json())

//Invoke seed function
seed()

//Route
app.post('/music', async(req, res) => {
    let newSong = req.body
    await Music.create(newSong)
    res.send('new son added')
})
app.get('/music', async (req, res) => {
    let allMusic = await Music.findAll()
    res.json({allMusic})
})

app.get('/music/:id', async(req, res) => {
    let id = req.params.id
    let oneMusic = await Music.findByPk(id)
    res.json({oneMusic})
})

app.listen(PORT, () => {
    console.log(`Server is now listening to port: ${PORT}`)
})