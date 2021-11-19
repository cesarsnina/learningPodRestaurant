
const {db} = require('./db');
const {Restaurant, Menu, Item} = require('./Models/index')



describe('Restaurant, Menu, Item tables creation', () => {
    // Runs the code prior to all tests

    beforeAll(async () => {
        //the 'sync' method will create tables based on the model class
        //by setting 'force:true' the tables are recreated each time
        //the test suite run
        await db.sync({force: true})
    })

    test('can create a restaurant', async () => {
        const restaurant = await Restaurant.create({name: 'African Meals', imagelink: 'http://some.image.url'})
        expect(restaurant.id).toBe(1)
    })

    test('can create a Menu', async () => {
        const menu = await Menu.create({title: 'Breakfast'})
        expect(menu.id).toBe(1)
    })

    test('can create a Item', async () => {
        const item1 = await Item.create({name: 'salade', price: 50})
        const item2 = await Item.create({name: 'desert', price: 30})
        expect(item1.id).toBe(1)
        expect(item2.id).toBe(2)
    })

})

describe('Tables associations', () => {
    beforeAll(async () => {
        await db.sync({force: true});
    })

    test('restaurants have menus', async () => {
        const restaurant = await Restaurant.create({name: 'African Meals', imagelink:'http://some.image.url' })
        const menu = await Menu.create({title: 'Breakfast'});
        await restaurant.addMenu(menu)
        const menus = await restaurant.getMenus();
        expect(menus[0].title).toBe('Breakfast');
        
    })

    test('menus have items', async () => {
        const menu = await Menu.create({title: 'Breakfast'});
        const item1 = await Item.create({name: 'salade', price: 50})
        const item2 = await Item.create({name: 'desert', price: 30})
        await menu.addItem(item1)
        await menu.addItem(item2)
        const items = await menu.getItems();
        expect(items[1].name).toBe('desert')
    })
})