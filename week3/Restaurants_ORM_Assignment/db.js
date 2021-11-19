const {Sequelize, DataTypes, Model} = require('sequelize')


//create an instance of the Sequelize class
const db = new Sequelize('database', 'username', 'password', {
    //what kind of database are you using?
    dialect: 'sqlite',
    //the name of the file of our databse
    storage: './restaurants-seq.sqlite',
    logging: false // if not false, terminal will be floaded with info
})

//export
module.exports = {db, DataTypes, Model}