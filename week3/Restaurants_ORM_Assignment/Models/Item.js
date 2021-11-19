const {db, DataTypes, Model} = require('../db')

//Item table
class Item extends Model {

}

//we need to create some columns from our table

Item.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER
    } 
},
{
    sequelize: db //let sequelize know where the table will be stored
})


//export
module.exports = {Item}