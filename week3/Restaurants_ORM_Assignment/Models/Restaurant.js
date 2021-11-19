
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



//inserting rowsn
// db.sync({force: true}).then(() => {

//     Restaurant.create({ name: 'Bayroot', imagelink:'https://www.telegraph.co.uk' }).then(() => {
//         console.log('row created');
//     })
//     Restaurant.create({ name: 'The Berkley', imagelink:'https://www.the-berkeley.co.uk' }).then(() => {
//         console.log('row created');
//     })
// });


   


//export
module.exports = {Restaurant}