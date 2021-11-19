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


//inserting rows
// db.sync({force: true}).then(() => {

//     Menu.create({ title: 'Afternoon tea'}).then((insertItem) => {
//         console.log(insertItem.dataValues);
//     })
//     Menu.create({ title: 'breakfast Menu'}).then(() => {
//         console.log('row created');
//     })
// });

//export
module.exports = {Menu}