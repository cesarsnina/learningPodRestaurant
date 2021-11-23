const {db, DataTypes, Model} = require('../db')

//Item table
class Item extends Model {

}


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
    sequelize: db 
})


//export
module.exports = {Item}