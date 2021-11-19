const {db, DataTypes, Model} = require('../db')

//Menu table
class Menu extends Model {

}

//we need to create some columns from our table

Menu.init({
    title: {
        type: DataTypes.STRING
    } 
},
{
    sequelize: db //let sequelize know where the table will be stored
})


//export
module.exports = {Menu}