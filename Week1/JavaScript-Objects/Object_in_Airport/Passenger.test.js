let Passenger = require('./Passenger')
let Bag = require('./Bag')
//test for Passenger
describe('Passenger class test', () => {

    //Passenger has a name
    test('Passenger should has a name', () => {
        //create instance for Passengger
        let newPassenger = new Passenger('serge')
        expect(typeof newPassenger.name).toBe('string')
    })

    //Passenger can have more than one bag
    test('Passenger should have 1 or more bags', () => {
        //create instance for Passenger
        let newPassenger2 = new Passenger('nikiema')
        newPassenger2.addBag(4)
        expect(newPassenger2.bags.length).toBe(1)
    })
})