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

//inserting rows
db.sync({force: true}).then(() => {

    Item.create({ name: 'Pret-a-porte', price: 60 }).then(() => {
        console.log('row created');
    })
    Item.create({ name: 'American Pancakes', price: 18 }).then(() => {
        console.log('row created');
    })
});

//export
module.exports = {Item}