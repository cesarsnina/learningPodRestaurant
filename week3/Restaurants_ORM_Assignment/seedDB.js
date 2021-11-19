const {db} = require('./db')
const {Restaurant, Menu, Item} = require('./Models/index')

const seeFile = async () => {
    await db.sync({force: true});
    await Promise.all([
        Menu.create({title: 'Afternoon tea'}),
        Menu.create({title: 'breakfast Menu'}),

        Restaurant.create({name: 'Bayroot', imagelink:'https://www.telegraph.co.uk'}),
        Restaurant.create({name: 'The Berkley', imagelink:'https://www.the-berkeley.co.uk'}),

        Item.create({name: 'Pret-a-porte', price: 60}),
        Item.create({name: 'American Pancakes', price: 18}),

    ])
}
seeFile()