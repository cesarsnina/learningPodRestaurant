//imports
const {db, DataTypes, Model} = require('../db') //require our db plus datatype and the model from db file

//game is a table
class Game extends Model {

}

//we nedd yo create some columns from our table

Game.init({
    name: DataTypes.STRING,
    platform: DataTypes.STRING,
},
{
    sequelize: db //let sequelize know where the table will be stored
})

//export
module.exports = {Game}