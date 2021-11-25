const {Card} = require('./Card');
const {Collector} = require('./Collector');

Collector.hasMany(Card, {foreignKey: 'collector_id'})
Card.belongsTo(Collector, {foreignKey: 'collector_id'})

module.exports = {
    Card,
    Collector
}