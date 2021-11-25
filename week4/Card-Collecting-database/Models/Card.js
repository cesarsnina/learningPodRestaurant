const {db, DataTypes, Model} = require('../db')

class Card extends Model{}

Card.init({
    // name: DataTypes.STRING,
    name: DataTypes.STRING,
    imgURL: DataTypes.STRING,
    cost: DataTypes.INTEGER
}, {
    sequelize: db
})

module.exports = {
    Card
}