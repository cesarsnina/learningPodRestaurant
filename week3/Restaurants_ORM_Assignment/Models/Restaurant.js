
const {db, DataTypes, Model} = require('../db')

//Restaurant table
class Restaurant extends Model {

}

//we need yo create some columns from our table

Restaurant.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    imagelink: {
        type: DataTypes.STRING,
    } 
},
{
    sequelize: db //let sequelize know where the table will be stored
})

   


//export
module.exports = {Restaurant}