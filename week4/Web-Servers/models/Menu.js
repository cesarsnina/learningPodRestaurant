const {db, DataTypes, Model} = require('../db')

//Menu table
class Menu extends Model {

}


Menu.init({
    title: {
        type: DataTypes.STRING
    }
},
{
    sequelize: db 
})


//export
module.exports = {Menu}