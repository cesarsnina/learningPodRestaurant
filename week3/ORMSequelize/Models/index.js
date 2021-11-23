const {db} = require('..db/')
const {Game} = require('./Game')
const {User} = require('./User')

//automatically assign foreign key
User.hasMany(Game)// Game table has userId foreign key that reference User
Game.belongsTo(User) // User userId has foreign key in the Game table

//manually assign foreign key
//User.hasMany(Game, {foreignKey: 'name'})

//User.hasMany(Game, {as: 'prototype'}) //assign specific name to column
