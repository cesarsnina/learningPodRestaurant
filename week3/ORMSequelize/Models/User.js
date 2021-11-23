//imports
const {db, DataTypes, Model} = require('../db') //require our db plus datatype and the model from db file

//User is a table
class User extends Model {

}

//we nedd yo create some columns from our table

User.init({
    username: DataTypes.STRING,
    gameCollected: DataTypes.STRING,
},
{
    sequelize: db //let sequelize know where the table will be stored
})

//export
module.exports = {User}