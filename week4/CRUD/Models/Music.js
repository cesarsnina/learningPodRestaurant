const {db, DataTypes, Model} = require('../db')

class Music extends Model{}

Music.init({
    name: DataTypes.STRING,
    genre: DataTypes.STRING
}, {
    sequelize: db
})

module.exports = {
    Music
}