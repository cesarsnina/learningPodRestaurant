
const {db, DataTypes, Model} = require('../db')

//Restaurant table
class Restaurant extends Model {

}


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
    sequelize: db,
    timestamps: false, 
})

   


//export
module.exports = {Restaurant}